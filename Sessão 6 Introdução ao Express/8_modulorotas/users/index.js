const express = require ('express')
const router = express.Router()
const path = require ('path')

const basepath = path.join(__dirname, '../template')

router.get('/add', (req,res)=>{
    res.sendFile(`${basepath}/userform.html`)
})

router.post('/save', (req,res)=>{
    console.log(req.body);
    
    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuario é ${name} e ele tem ${age} anos`);
    res.sendFile(`${basepath}/userform.html`)
})


router.get('/:id', (req, res)=>{
    const id = req.params.id

    console.log(`Carregando o usuario ${id}`);

    res.sendFile(`${basepath}/users.html`)
});


module.exports = router