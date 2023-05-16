const router = require('express').Router();
const  { BlogPost, Comment } = require("../models")

router.get('/', async (req, res)=>{
    const allPosts = await BlogPost.findAll({
        include: [{ model: Comment }],
    });

    const parsedPosts = allPosts.map(post => post.get({plain: true}))

    res.render('all', {
        parsedPosts,
        logged_in: req.session.logged_in
    })
})

router.get('/dashboard', (req, res)=>{
    res.render('dashboard', {logged_in: req.session.logged_in})
})

router.get('/login', (req, res)=>{
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login')
})

module.exports =  router