const { BlogCredentials } = require("../models");

const userData = [
  {
    username: "anup",
    password: "$2y$10$wqkNXuOpqGsdEFsuejt1.eEAL3PtOmwNOmyQ4I4KlbkyQyNJ0ali",
  },
  {
    username: "ap",
    password: "fghjuhghfgdgfhv",
  },
];

const seedUser = () => BlogCredentials.bulkCreate(userData);

module.exports = seedUser;
