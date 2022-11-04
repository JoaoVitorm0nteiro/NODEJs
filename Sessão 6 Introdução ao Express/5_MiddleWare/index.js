const express = require('express');
const path = require('path');
const { toUSVString } = require('util');

const app = express();
const basepath = path.join(__dirname, 'template');
const port = 3000;

//simulando autenticação
const checkauth = function(req, res, next){
    req.authStatus = true;
    
    if(req.authStatus){
        console.log('Está logado, pode continuar.');
        next();

    }else{
        res.sendFile(`${basepath}/notauthorized.html`)
        console.log('Não está logado, faça o login para continuar');
        next();
    }

}

app.use(checkauth)

app.get('/', (req, res)=>{
    res.sendFile(`${basepath}/index.html`)
});

app.listen(port, ()=>{
    console.log(`App executando na porta:${port}`);
});
