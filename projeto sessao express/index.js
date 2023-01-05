const express = require ('express');
const path = require('path');

const app = express();
const basepath = path.join (__dirname, 'template');
const port = 5000;

const user = require ('./user')
 
//importando componentes estaticos
app.use(express.static('public'))     

app.use('/user', user);

//carregando a pagina home
app.get('/', (req,res)=>{
    res.sendFile(`${basepath}/index.html`)
})

app.listen(port, ()=>{
    console.log(`Serviço rodando na porta: ${port}`);
})
