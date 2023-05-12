const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

BlogPost.belongsTo(User, {
    foreignKey: "user_id"
});

Comment.belongsTo(User, {
    foreignKey: "user_id"
});

BlogPost.hasMany(Comment, {
    foreignKey: "blog_post_id"
});

module.exports = { User, BlogPost, Comment };