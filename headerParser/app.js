const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const useragent = require('express-useragent')

const app = module.exports = express()
app.use(useragent.express())

app.get('/api/whoami', (req, res) => {
  var ipAdress = req.ip
  var lang = req.acceptsLanguages()
  var software = `OS: ${req.useragent.os}, Platform: ${req.useragent.platform}, Version: ${req.useragent.version}`
  
  res.json({
    ip: ipAdress,
    language: lang[0],
    useragent: software
  })
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
