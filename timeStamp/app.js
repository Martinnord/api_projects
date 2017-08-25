const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/dates/:dateValue', (req, res, next) => {
  const dateValue = req.params.dateValue
  
  const formatDate = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  
  if(isNaN(dateValue)) {
    var naturalDate = new Date(dateValue)
    naturalDate = naturalDate.toLocaleDateString('en-us', formatDate)
    
    var unixDate = new Date(dateValue).getTime()/1000
  } else {
    var unixDate = dateValue
    var naturalDate = new Date(dateValue * 1000)
    naturalDate = naturalDate.toLocaleDateString('en-us', formatDate)
  }
  
  res.json({
    unix: unixDate,
    natural: naturalDate
  })
})

app.listen(3000, () => {
  console.log("Listening on port 3000!")
})

module.exports = app