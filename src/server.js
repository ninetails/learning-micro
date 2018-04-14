const { readFileSync } = require('fs')
const { join } = require('path')
const { ephemeral } = require('tls-keygen')
const spdy = require('spdy')
const { run, send } = require('micro')

;(async () => {
  const { key, cert } = await ephemeral({
    key: join(__dirname, '..', 'certs', 'key.pem'),
    cert: join(__dirname, '..', 'certs', 'cert.pem'),
  })

  const microHttps = fn =>
    spdy.createServer({ key, cert }, (req, res) => run(req, res, fn))

  const server = microHttps(async (req, res) =>
    send(res, 200, `Hello world!`))

  server.listen(process.env.PORT || 8443)
})()
