//modulos
const express = require('express');
const path = require('path');

//variaveis base
const app = express();
const port = 3000;
const basepath = path.join(__dirname, 'template');

//Aplicação de fato
app.get('/', (req, res)=>{
    res.sendFile(`${basepath}/index.html`)
})

//exibido
app.listen(port, ()=>{
    /*exebido no console ->*/ console.log(`Rodando na porta:${port}`);
});

