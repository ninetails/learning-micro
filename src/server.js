const { join } = require('path')
const { ephemeral } = require('tls-keygen')
const spdy = require('spdy')
const { run, send } = require('micro')

const PORT = process.env.PORT || 8443

;(async () => {
  const { key, cert } = await ephemeral({
    key: join(__dirname, '..', 'certs', 'key.pem'),
    cert: join(__dirname, '..', 'certs', 'cert.pem')
  })

  const microHttps = fn =>
    spdy.createServer({ key, cert }, (req, res) => run(req, res, fn))

  const server = microHttps(async (req, res) =>
    send(res, 200, `Hello world!`))

  server.listen(PORT)
  // eslint-disable-next-line no-console
  console.log(`Server running on port: ${PORT}`)
})()
