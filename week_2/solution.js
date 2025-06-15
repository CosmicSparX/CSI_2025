const http = require('http');
const fs = require('fs/promises');
const path = require('path');
const url = require('url');
const api = require("./api.js");

const PORT = 3000;
const FILES_DIR = path.join(__dirname, 'managed_dir');

function serveHtml(res) {
    const htmlFilePath = path.join(__dirname, 'index.html');

    fs.readFile(htmlFilePath, "utf-8")
        .then((data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
    }).catch(() => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error encountered loading HTML file.');
    });
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const pathname = parsedUrl.pathname;

    if (req.method === 'GET' && pathname === '/') {
        serveHtml(res);
    } else if (req.method === 'POST' && pathname === '/create') {
        api.createFile(req, res);
    } else if (req.method === 'GET' && pathname === '/read') {
        api.readFile(req, res);
    } else if (req.method === 'POST' && pathname === '/delete') {
        api.deleteFile(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`Files will be managed in: ${FILES_DIR}`);
});