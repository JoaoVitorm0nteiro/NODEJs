const express = require ('express');
const path = require ('path');

const app = express()
const basepath = path.join(__dirname, 'template')
const port = 3000;

//ler body
app.use(
    express.urlencoded({
        extended:true,
    }),
)

app.use(express.json())

//arquivos estaticos
app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.sendFile(`${basepath}/index.html`)
})

app.listen(port, ()=>{
    console.log(`O serviço está em execução na porta: ${port}`);
})
