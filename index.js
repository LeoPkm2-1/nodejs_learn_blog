const express = require('express')
const app = express()
const port = 3000

app.get('/about', (req, res) => {
  let a=1;
  let b=5;
  let c=a*b;
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})