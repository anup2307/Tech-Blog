const { BlogPosts } = require("../models");

const postsData = [
  {
    heading: "Pirate Ipsum",
    description:
      "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crows nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.",
    user_id: 1,
  },
  {
    heading: "Zombie Ipsum",
    description:
      "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.",
    user_id: 1,
  },
];

const seedposts = () => BlogPosts.bulkCreate(postsData);

module.exports = seedposts;
