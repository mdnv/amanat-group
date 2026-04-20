const fs = require('fs');
const https = require('https');
const path = require('path');

const homePagePath = path.join(__dirname, 'src', 'pages', 'HomePage.jsx');
const publicHomeDir = path.join(__dirname, 'public', 'home');

if (!fs.existsSync(publicHomeDir)) {
  fs.mkdirSync(publicHomeDir, { recursive: true });
}

let content = fs.readFileSync(homePagePath, 'utf8');

const regex = /"https:\/\/lh3\.googleusercontent\.com\/aida-public\/([^"]+)"/g;

let match;
const downloads = [];
let imgCounter = 1;

while ((match = regex.exec(content)) !== null) {
  const fullUrl = match[0].slice(1, -1); // strip quotes
  downloads.push({
    url: fullUrl,
    filename: `img${imgCounter}.jpg`
  });
  imgCounter++;
}

// Remove duplicates if any
const uniqueDownloads = [];
const seenUrls = new Set();
for (const d of downloads) {
  if (!seenUrls.has(d.url)) {
    seenUrls.add(d.url);
    uniqueDownloads.push(d);
  }
}

async function start() {
  for (const d of uniqueDownloads) {
    console.log(`Downloading ${d.url} to ${d.filename}...`);
    
    // We update the content immediately for unique URLs
    content = content.replace(new RegExp(d.url.replace(/[.*+?^$\/{}()|[\\]\\\\]/g, '\\\\$&'), 'g'), `/home/${d.filename}`);
    
    await new Promise((resolve, reject) => {
      const filePath = path.join(publicHomeDir, d.filename);
      const file = fs.createWriteStream(filePath);
      
      https.get(d.url, (response) => {
        if (response.statusCode !== 200) {
            reject(new Error(`Failed to get '${d.url}' (${response.statusCode})`));
            return;
        }
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      }).on('error', (err) => {
        fs.unlink(filePath, () => {}); // Delete the file async.
        reject(err);
      });
    });
  }

  fs.writeFileSync(homePagePath, content, 'utf8');
  console.log('All images downloaded and HomePage.jsx updated successfully.');
}

start().catch(console.error);
