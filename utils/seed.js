const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { getRandomUsername, getRandomThought } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Delete the entries in the collection
  await Thought.deleteMany({});
  await User.deleteMany({});

  // Create empty array to hold the users and thoughts
  const users = [];
  const thoughts = [];

  for (let i = 0; i < 5; i++) {
    thoughts.push({
      thoughtText: getRandomThought(),
      username: getRandomUsername(),
    });
  }

  // Wait for the thoughts to be inserted into the database
  await Thought.collection.insertMany(thoughts);

  thoughts.forEach((thought) => {
    users.push({
      username: thought.username,
      email: `${thought.username}@email.com`,
      thoughts: [thought._id],
    });
  });

  // Wait for the posts array to be inserted into the database
  await User.collection.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts, ["username", "_id"]);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
