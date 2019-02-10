const polka = require('polka')
const send = require('@polka/send-type')
const morgan = require('morgan')
const fs = require('fs')
const { exec } = require('child_process')
const cors = require('cors')({ origin: true })
const { text } = require('body-parser')

function initApp() {
  return polka()
    .use(morgan('dev'), cors, text({ type: 'text/plain' }))
    .get('/', (_req, res) => {
      send(res, 200, { message: 'OK' }, { 'Content-Type': 'application/json' })
    })
    .post('/print', async (req, res) => {
      const content = req.body
      const filePath = path.join(ROOT, '/storage/logs', Date.now().toString())
      const printerPath = config.PRINTER_PATH

      try {
        fs.writeFileSync(filePath, content)

        const command = `copy /b ${filePath} ${printerPath}`

        await exec(command)

        const message = `filepath: ${filePath} printed successfully`

        send(res, 200, JSON.stringify({ message }), {
          'Content-Type': 'application/json'
        })
      } catch (error) {
        console.error('something wrong :(', error)
        return send(res, 500, JSON.stringify({ error: { message: error.message } }), {
          'Content-Type': 'application/json'
        })
      }
    })
}

module.exports = initApp
