const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const githubData ={
    "data": "Click Here",
    "size": 36,
    "style": "bold",
    "name": "text1",
    "hOffset": 250,
    "vOffset": 100,
    "alignment": "center",
    "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send('hello from twitter ')
})

app.get('/login', (req,res)=>{
    res.send('<h1>hello from login page</h1>');
});

app.get('/github', (req,res)=>{
    res.json(githubData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})