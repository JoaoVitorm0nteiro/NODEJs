const express = require ('express');
const router = express.Router();
const path = require ('path');

const basepath = path.join(__dirname, '');


router.get('/user', (req, res)=>{
    res.sendFile(`${basepath}/user.html`);
})

module.exports = router;