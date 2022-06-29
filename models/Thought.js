const { Schema, model } = require("mongoose");
const Reactions = require("./Reaction");

// Schema to create a Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: formatDate,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [Reactions],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Function to format date timestamps
function formatDate(date) {
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var fullDate = `${month}/${day}/${year}`;

  return fullDate;
}

// A virtual property `reactionCount` that returns the number of reactions per thought
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
