import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

async function main() {
    const transport = new StdioClientTransport({
        command: "node",
        args: ["stitch-mcp-server.mjs"]
    });
    
    const client = new Client({
        name: "test-client",
        version: "1.0.0"
    }, {
        capabilities: {
            tools: {},
            resources: {},
            prompts: {}
        }
    });

    await client.connect(transport);
    
    const prompts = await client.listPrompts();
    console.log("Prompts:", JSON.stringify(prompts, null, 2));

    const tools = await client.listTools();
    console.log("Tools:", JSON.stringify(tools, null, 2));
    
    const resources = await client.listResources();
    console.log("Resources:", JSON.stringify(resources, null, 2));

    process.exit(0);
}

main().catch(console.error);
