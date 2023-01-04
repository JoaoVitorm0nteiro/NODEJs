const express = require('express');
const path = require('path');

const app = express();
const basepath = path.join(__dirname, 'template');
const port = 3000;
 
const users = require ('./users')

//ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

app.use('/users', users)

app.get('/', (req, res)=>{
    res.sendFile(`${basepath}/index.html`)
})


app.listen(port, ()=>{
    console.log(`App executando na porta:${port}`);
});
