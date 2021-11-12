const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))
app.get('/', (req, res) => {
  let a=1;
  let b=5;
  let c=a*b;
  res.send("<h1 style='color:red'>ahihi everybody</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})