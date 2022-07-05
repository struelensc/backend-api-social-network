const { User, Thought } = require("../models");

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  // Get a single thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then(async (thought) =>
        !thought
          ? res.status(404).json({ message: "No thought found with this id!" })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) =>
        User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought._id } },
          { runValidators: true, new: true }
        )
      )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with this id!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
