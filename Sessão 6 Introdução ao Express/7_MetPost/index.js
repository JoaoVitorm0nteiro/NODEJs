const express = require('express');
const path = require('path');

const app = express();
const basepath = path.join(__dirname, 'template');
const port = 3000;
 
//ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())


app.get('/users/add', (req,res)=>{
    res.sendFile(`${basepath}/userform.html`)
})

app.post('/users/save', (req,res)=>{
    console.log(req.body);
    
    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuario é ${name} e ele tem ${age} anos`);
    res.sendFile(`${basepath}/userform.html`)
})


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

app.get('/users/add', (req,res)=>{
    res.sendFile(`${basepath}/userform.html`)
})

app.post('/users/save', (req,res)=>{

})