//arquivo com o modulo de rotas
const express = require ('express');
const { appendFile } = require('fs');
const router = express.Router();
const path = require ('path');

const basepath = path.join(__dirname, '../template');

router.get('/:id', (req, res)=>{
    const id = req.params.id
    res.sendFile(`${basepath}/user.html`);
    console.log(`O numero do usuario requisitado é: ${id}`);
})

module.exports = router;