const server = require('./api/server')

const port = process.env.PORT || 8080

server.listen(port, () => {
  return console.log(`Listening on port ${port}...`)
})
