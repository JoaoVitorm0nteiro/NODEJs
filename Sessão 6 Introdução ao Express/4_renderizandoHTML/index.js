const express = require('express');
const path = require('path');
const port = 3000;
const app = express();
const basepath = path.join(__dirname, 'template')

app.get('/', (req, res)=>{
    res.sendFile(`${basepath}/index.html`)
})

app.listen(port, ()=>{
    console.log(`Rodando na porta:${port}`);
})