const BlogPosts = require("./blogposts");
const BlogCredentials = require("./blogcredentials");

BlogCredentials.hasMany(BlogPosts, {
  foreignKey: "user_id",
});

BlogPosts.belongsTo(BlogCredentials, {
  foreignKey: "user_id",
});

module.exports = { BlogCredentials, BlogPosts };
