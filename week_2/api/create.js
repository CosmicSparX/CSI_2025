import path from "path";
import fs from "fs/promises";

export function createFile(req, res) {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString();
    })

    req.on('end', () => {
        const params = new URLSearchParams(body);
        const filename = params.get('filename');
        const content = params.get('content');

        if (!filename || !content) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Filename and content are required.');
            return;
        }

        const filePath = path.join(FILES_DIR, filename);

        fs.writeFile(filePath, content)
            .then(() => {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`File '${filename}' created successfully!`);
            })
            .catch(err => {
                console.error(`Error creating file ${filename}:`, err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(`Error creating file: ${err.message}`);
            })
    })
}
