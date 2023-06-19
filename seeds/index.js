const sequelize = require("../config/connections");
const blogPosts = require("./blogpostsdata");
const blogCredentials = require("./blogcredentialsdata");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await blogCredentials();

  await blogPosts();

  process.exit(0);
};

seedAll();
