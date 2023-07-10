const BlogPosts = require('./blogposts');
const BlogCredentials = require('./blogcredentials');
const BlogComments = require('./blogcomments');

BlogCredentials.hasMany(BlogPosts, {
  foreignKey: 'user_id',
});

BlogPosts.belongsTo(BlogCredentials, {
  foreignKey: 'user_id',
});

BlogCredentials.hasMany(BlogComments, {
  foreignKey: 'user_id',
});

BlogComments.belongsTo(BlogCredentials, {
  foreignKey: 'user_id',
});

BlogPosts.hasMany(BlogComments, {
  foreignKey: 'post_id',
});

BlogComments.belongsTo(BlogPosts, {
  foreignKey: 'post_id',
});

module.exports = { BlogCredentials, BlogPosts, BlogComments };
