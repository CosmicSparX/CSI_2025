import path from "path";
import fs from "fs"; // Using the standard callback-based fs module
import { URL } from 'url';
import {FILES_DIR} from "./solution.js";


function sendResponse(res, statusCode, contentType, message) {
    res.writeHead(statusCode, { 'Content-Type': contentType });
    res.end(message);
}

export function createFile(req, res) {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const { fileName, content } = JSON.parse(body);
        const filePath = path.join(FILES_DIR, fileName);

        fs.writeFile(filePath, String(content || ''), (err) => {
            sendResponse(res, 200, 'text/plain', `File '${fileName}' created successfully!`);
        });
    });

    req.on('error', (err) => {
        sendResponse(res, 500, 'text/plain', 'Internal server error during request processing.');
    });
}

export function readFile(req, res) {
    // console.log(req.url);
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const fileName = parsedUrl.searchParams.get('fileName');

    if (!fileName) {
        sendResponse(res, 400, 'text/plain', 'Filename is required as a query parameter.');
        return;
    }

    const filePath = path.join(FILES_DIR, fileName);
    // console.log(filePath);
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(`Error reading file ${fileName}:`, err);
            if (err.code === 'ENOENT') {
                sendResponse(res, 404, 'text/plain', `File '${fileName}' not found.`);
            } else {
                sendResponse(res, 500, 'text/plain', `Error reading file: ${err.message || 'Internal Server Error'}`);
            }
            return;
        }
        sendResponse(res, 200, 'text/plain', data);
    });
}

export function deleteFile(req, res) {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', () => {
        try {
            const { fileName } = JSON.parse(body);

            if (!fileName) {
                sendResponse(res, 400, 'text/plain', 'Filename is required.');
                return;
            }

            const filePath = path.join(FILES_DIR, fileName);

            fs.access(filePath, fs.constants.F_OK, (accessErr) => {
                if (accessErr) {
                    if (accessErr.code === 'ENOENT') {
                        sendResponse(res, 404, 'text/plain', `File '${fileName}' not found for deletion.`);
                    } else {
                        console.error(`Error checking file access for ${fileName}:`, accessErr);
                        sendResponse(res, 500, 'text/plain', `Error deleting file: ${accessErr.message}`);
                    }
                    return;
                }

                fs.unlink(filePath, (unlinkErr) => {
                    if (unlinkErr) {
                        console.error(`Error deleting file ${fileName}:`, unlinkErr);
                        sendResponse(res, 500, 'text/plain', `Error deleting file: ${unlinkErr.message}`);
                        return;
                    }
                    sendResponse(res, 200, 'text/plain', `File '${fileName}' deleted successfully!`);
                });
            });
        } catch (err) {
            console.error(`Error parsing delete file request body or other error:`, err);
            sendResponse(res, 400, 'text/plain', `Error deleting file: ${err.message || 'Internal Server Error'}`);
        }
    });

    req.on('error', (err) => {
        console.error('Request stream error:', err);
        sendResponse(res, 500, 'text/plain', 'Internal server error during request processing.');
    });
}