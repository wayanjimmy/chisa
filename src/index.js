//@ts-check

const dotenv = require('dotenv')
const path = require('path')

const initApp = require('./app')
const config = require('./config')
const ROOT = path.resolve(__dirname, '../')

dotenv.config({ path: path.join(ROOT, '.env') })
const app = initApp()

app.listen(config.PORT, () => {
  console.log(`Chisa is listening on localhost:${config.PORT}`)
})
