const router = require('express').Router();
const { User, Comment, BlogPost } = require('../../models');

// GET all BlogPosts
router.get('/', async (req, res) => {
    try {
      const blogPostData = await BlogPost.findAll({
        // This will retrieve every BlogPost's associated Comment data. In SQL, this would be a JOIN function.
        // include: [{ model: Comment }],
      });
      res.status(200).json(blogPostData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET a single BlogPost
  router.get('/:id', async (req, res) => {
    try {
      const blogPostData = await BlogPost.findByPk(req.params.id, {
        // include: [{ model: Comment }],
      });
  
      if (!blogPostData) {
        res.status(404).json({ message: 'No BlogPost found with that id!' });
        return;
      }
  
      res.status(200).json(blogPostData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // CREATE a BlogPost
  router.post('/', async (req, res) => {
    try {
      const blogPostData = await BlogPost.create(req.body);
      res.status(200).json(blogPostData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // UPDATE a BlogPost
  router.put('/:id', (req, res) => {
    // Calls the update method on the BlogPost model
    BlogPost.update(
      {
        // All the fields you can update and the data attached to the request body.
        title: req.body.title,
        contents: req.body.contents,
      },
      {
        // Gets the post based on the id given in the request parameters
        where: {
          id: req.params.id,
        },
      }
    )
      .then((updatedBlogPost) => {
        // Sends the updated BlogPost as a json response
        res.json(updatedBlogPost);
      })
      .catch((err) => res.json(err));
  });

  // DELETE a BlogPost
  router.delete('/:id', async (req, res) => {
    try {
      const blogPostData = await BlogPost.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!blogPostData) {
        res.status(404).json({ message: 'No BlogPost found with that id!' });
        return;
      }
  
      res.status(200).json(blogPostData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;