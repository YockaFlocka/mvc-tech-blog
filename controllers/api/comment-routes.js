const router = require('express').Router();
const { User, Comment, BlogPost } = require('../../models');

// GET all Comments
router.get('/', async (req, res) => {
    try {
      const commentData = await Comment.findAll({
        // This will retrieve every Comment's associated User data. In SQL, this would be a JOIN function.
        // include: [{ model: User }],
      });
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET a single Comment
  router.get('/:id', async (req, res) => {
    try {
      const commentData = await Comment.findByPk(req.params.id, {
        // include: [{ model: User }],
      });
  
      if (!commentData) {
        res.status(404).json({ message: 'No Comment found with that id!' });
        return;
      }
  
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // CREATE a Comment
  router.post('/', async (req, res) => {
    try {
      const commentData = await Comment.create(req.body);
      res.status(200).json(commentData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // UPDATE a Comment
  router.put('/:id', (req, res) => {
    // Calls the update method on the Comment model
    Comment.update(
      {
        // All the fields you can update and the data attached to the request body.
        contents: req.body.contents,
      },
      {
        // Gets the books based on the id given in the request parameters
        where: {
          id: req.params.id,
        },
      }
    )
      .then((updatedComment) => {
        // Sends the updated book as a json response
        res.json(updatedComment);
      })
      .catch((err) => res.json(err));
  });
  
  // DELETE a Comment
  router.delete('/:id', async (req, res) => {
    try {
      const commentData = await Comment.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!commentData) {
        res.status(404).json({ message: 'No Comment found with that id!' });
        return;
      }
  
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;