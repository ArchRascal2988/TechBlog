const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
    foreignKey: "post_author"
});

Comment.belongsTo(User, {
    foreignKey: "comment_author"
});

Comment.belongsTo(Post,{
    foreignKey: "post_id"
});

User.hasMany(Post, {
    foreignKey:"post_author",
    onDelete: "CASCADE"
});

User.hasMany(Comment, {
    foreignKey: "comment_author",
    onDelete: "CASCADE"
});

Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE"
});

module.exports = {
    User,
    Comment,
    Post
};