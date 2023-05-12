const router = require('express').Router();

router.get('/', (req, res)=>{
    res.render('all')
})

router.get('/hello', (req, res)=>{
    res.render('hello')
})

module.exports =  router