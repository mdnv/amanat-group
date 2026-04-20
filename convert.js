const fs = require('fs');

const html = fs.readFileSync('home_stitch.html', 'utf8');

// Extract theme JSON
const themeMatch = html.match(/"colors":\s*({[^}]*})/);
let colors = {};
if (themeMatch) {
    colors = JSON.parse(themeMatch[1]);
}

let bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
let body = bodyMatch ? bodyMatch[1] : '';

// Remove script tags from body if any
body = body.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

// Convert class to className
body = body.replace(/class=/g, 'className=');
body = body.replace(/for=/g, 'htmlFor=');

// Fix unclosed elements (img, br, hr, input)
body = body.replace(/<img(.*?)>/g, (match, attrs) => {
    if (attrs.trim().endsWith('/')) return match;
    return `<img${attrs}/>`;
});
body = body.replace(/<input(.*?)>/g, (match, attrs) => {
    if (attrs.trim().endsWith('/')) return match;
    return `<input${attrs}/>`;
});
body = body.replace(/<br>/g, '<br/>');
body = body.replace(/<hr>/g, '<hr/>');

// Replace style attributes (e.g. style="...") with JSX style prop
// Note: there might not be inline styles in this HTML, but let's check
// We will just do a basic replace or ignore if none. Looking at the HTML, no style="" was used.

// HTML comments to JSX comments
body = body.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

const jsx = `
import React from 'react';

function HomePage() {
  return (
    <div className="bg-surface font-body text-on-surface">
      ${body}
    </div>
  );
}

export default HomePage;
`;

fs.writeFileSync('src/pages/HomePage.jsx', jsx);

// Format CSS vars into Tailwind v4 theme block
let themeCss = '\n\n/* Imported from Stitch Design */\n@theme {\n';
for (const [key, value] of Object.entries(colors)) {
    themeCss += `  --color-${key}: ${value};\n`;
}
themeCss += '}\n';

// Also append font variables from Stitch
themeCss += `
@theme {
  --font-body: 'Manrope', sans-serif;
  --font-headline: 'Manrope', sans-serif;
  --font-label: 'Manrope', sans-serif;
}
`;

// Also append base CSS classes from the Stitch style block if any
// Looking at the HTML:
// .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
// .ticker-scroll { display: flex; white-space: nowrap; animation: scroll 30s linear infinite; }
// @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

themeCss += `
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.ticker-scroll {
    display: flex;
    white-space: nowrap;
    animation: scroll 30s linear infinite;
}
@keyframes scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
}
`;

fs.appendFileSync('src/styles.css', themeCss);

console.log("HomePage.jsx and styles.css updated");
