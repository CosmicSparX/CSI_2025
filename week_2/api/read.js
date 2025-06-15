import path from "path";
import fs from "fs/promises";

export function readFile(req, res) {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString();
    })

    req.on('end', () => {
        const params = new URLSearchParams(body);
        const filename = params.get('filename');

        if (!filename) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Filename is required.');
            return;
        }

        const filePath = path.join(FILES_DIR, filename);

        fs.readFile(filePath, 'utf-8')
            .then(data => {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(`Here's the content: \n${data}`);
            })
            .catch(err => {
                console.error(`Error reading file ${filename}:`, err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(`Error reading file: ${err.message}`);
            })
    })
}
