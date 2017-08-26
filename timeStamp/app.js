const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/dates/:dateValue', (req, res) => {
  const dateValue = req.params.dateValue
  console.log(req.params)
  
  const formatDate = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  // Checks if the datevalue is a valid number
  if(isNaN(dateValue)) {
    // For the natural date
    var naturalDate = new Date(dateValue)
    naturalDate = naturalDate.toLocaleDateString('en-us', formatDate)
    var unixDate = new Date(dateValue).getTime()/1000
  } else {
      // For the unix date
      var unixDate = dateValue
      var naturalDate = new Date(dateValue * 1000)
      naturalDate = naturalDate.toLocaleDateString('en-us', formatDate)
  }
  
  // Creates a JSON object
  res.json({
    unix: unixDate,
    natural: naturalDate
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

module.exports = app