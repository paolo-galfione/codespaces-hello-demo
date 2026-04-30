const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <html>
      <head><title>Hello Codespace</title></head>
      <body style="font-family: sans-serif; padding: 2rem;">
        <h1>👋 Hello World dal Codespace!</h1>
        <ul>
          <li><b>Hostname:</b> ${os.hostname()}</li>
          <li><b>Platform:</b> ${os.platform()}</li>
          <li><b>Arch:</b> ${os.arch()}</li>
          <li><b>CPU:</b> ${os.cpus().length} core</li>
          <li><b>RAM:</b> ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(1)} GB</li>
          <li><b>Node:</b> ${process.version}</li>
        </ul>
      </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log('🚀 Server in ascolto su http://localhost:3000');
});
