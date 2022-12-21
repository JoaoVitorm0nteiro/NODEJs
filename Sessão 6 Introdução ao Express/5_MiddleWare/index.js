const express = require('express');
const path = require('path');

const app = express();
const basepath = path.join(__dirname, 'template');
const port = 3000;

//simulando autenticação
const checkauth = function(req, res, next){
    req.authStatus = false;
    
    if(req.authStatus){
        console.log('Está logado, pode continuar.');
        next();
        //se req.authStatus = true proxima para a proxima função

    }else{
        res.sendFile(`${basepath}/notauthorized.html`)
        console.log('Não está logado, faça o login para continuar');
        //next();
        //se req.authStatus = false
    }

}
app.use(checkauth) //chamada da função

app.get('/', (req, res)=>{
    res.sendFile(`${basepath}/index.html`)
});

app.listen(port, ()=>{
    console.log(`App executando na porta:${port}`);
});
