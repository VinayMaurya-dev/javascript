require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/youtube',(req,res)=>{
    res.send('My youtube channel Name is speedy Support')
})
app.get('/name',(req,res)=>{
    res.send('<h1>Vinay Prasoon Maurya</h1>')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
