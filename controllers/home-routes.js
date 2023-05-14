const router = require('express').Router();
const  { BlogPost } = require("../models")

router.get('/', async (req, res)=>{
    const allPosts = await BlogPost.findAll();
    const parsedPosts = allPosts.map(post => post.get({plain: true}))

    res.render('all', {
        posts: parsedPosts,
        number: 42,
        bool: false,
        str: "test"
    })
})

router.get('/signup', (req, res)=>{
    res.render('signup')
})

router.get('/login', (req, res)=>{
    res.render('login')
})

router.get('/dashboard', (req, res)=>{
    res.render('dashboard')
})

module.exports =  router