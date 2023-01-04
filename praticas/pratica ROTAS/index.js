const express = require ('express');
const path = require ('path');

const app = express();
const port = 3000;
const basepath = path.join(__dirname, 'template');

//LER O BODY
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

app.get('/users/add', (req, res)=>{
    res.sendFile(`${basepath}/userform.html`)
})

app.post('/users/save', (req, res)=>{
    console.log(req.body);

    const user = req.body.username;
    const password = req.body.password
    
    console.log(`Seu usuario é ${user} e a senha é ${password}`);

    res.sendFile(`${basepath}/userform.html`)
})

app.get('/', (req, res)=>{
    res.sendFile(`${basepath}/index.html`);
})

app.listen(port, ()=>{
    console.log(`O serviço está em execução na porta ${port}`);
})
