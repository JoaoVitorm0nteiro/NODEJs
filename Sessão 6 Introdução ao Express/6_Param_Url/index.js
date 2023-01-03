const express = require('express');
const path = require('path');

const app = express();
const basepath = path.join(__dirname, 'template');
const port = 3000;


app.get('/users/:id', (req, res)=>{
    const id = req.params.id

    console.log(`Carregando o usuario ${id}`);

    res.sendFile(`${basepath}/users.html`)
});


app.get('/', (req, res)=>{
    console.log(`Executando`);
    res.sendFile(`${basepath}/index.html`)
})


app.listen(port, ()=>{
    console.log(`App executando na porta:${port}`);
});
