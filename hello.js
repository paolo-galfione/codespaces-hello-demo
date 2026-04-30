const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  // Endpoint API: ritorna JSON
  if (req.url === '/api/hello') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({
      message: 'Hello World',
      from: 'GitHub Codespace',
      container: {
        hostname: os.hostname(),
        platform: os.platform(),
        arch: os.arch(),
        cpus: os.cpus().length,
        totalMemoryGB: +(os.totalmem() / 1024 / 1024 / 1024).toFixed(1),
        nodeVersion: process.version
      },
      timestamp: new Date().toISOString()
    }, null, 2));
    return;
  }

  // Pagina HTML di default
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
        <p>Prova anche l'endpoint JSON: <a href="/api/hello">/api/hello</a></p>
      </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log('🚀 Server in ascolto su http://localhost:3000');
  console.log('   GET /          → pagina HTML');
  console.log('   GET /api/hello → JSON');
});