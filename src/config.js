//@ts-check

module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: Number(process.env.PORT) || 3000,
  PRINTER_PATH: process.env.PRINTER_PATH || '\\\\localhost\\minipos'
}
