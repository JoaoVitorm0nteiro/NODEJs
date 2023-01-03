const express = require ('express');
const path = require ('path');

const app = express();
const basepath = path.join(__dirname, 'template')
const port = 3000;

//fazendo a leitura do body

app.use(
    express.urlencoded({
    extended: true,
}),
)

app.use(express.json())

app.get('/user/add', (req,res)=>{
    res.sendFile(`${basepath}/userform.html`)
})

app.post('/user/save', (req,res)=>{
    console.log(req.body);
    
    const name = req.body.name;
    const age = req.body.age;

    console.log(`O nome do usuario é: ${name} e a idade é: ${age}`);
    res.sendFile(`${basepath}/sucess.html`)
})

app.get('/', (req,res)=>{
    res.sendFile(`${basepath}/index.html`)
})

app.listen(port, ()=>{
    console.log(`Executando na porta:   ${port}`);
})