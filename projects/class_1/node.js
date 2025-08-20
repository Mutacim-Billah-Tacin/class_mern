// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         fs.readFile('index.html', (err, data) => {
//             if (err) {
//                 res.writeHead(500, { 'Content-Type': 'text/plain' });
//                 res.end('Internal Server Error');
//             } else {
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.end(data);
//             }
//         });
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Not Found');
//     }
// });

// const port = 3000;
// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
// });
