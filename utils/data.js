const words = [
  "Brand",
  "Nose",
  "Similar",
  "Preference",
  "Diagram",
  "Exemption",
  "Rotten",
  "Smile",
  "Blind",
  "Poem",
  "Seed",
  "Heat",
  "Physical",
  "Depend",
  "Glance",
  "Lend",
  "Sit",
  "Art",
  "Leave",
  "Volume",
];

const thoughts = [
  "The scream in your head will never be out of breath.",
  "Do fish in water have their hidden life where they go to school, hang out, study, and get married?",
  "If everyone had roller skates instead of feet, would there be cars or would they go rollerblading everywhere?",
  "We will never know what memories we had as children and we will never remember them.",
  "We know our parents for whole our life, while they know us only part of their lives.",
  "Someone was born at this very moment, and someone lost his life at this very moment.",
  "Our brain has never experienced some things, and yet it can tailor a scenario in its head as if it had happened.",
  "If the tomato is a fruit, then ketchup is the jam.",
  "If I were a book, what title would I have?",
  "Valentine’s Day is known for its red color, red roses, red hearts … Would it be strange if another color was used for Valentine’s Day instead of red? And why red? Why does red associate us with love?",
  "The hospital where you were born is the only building you left without entering.",
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomUsername = () =>
  `${getRandomArrItem(words)}${getRandomArrItem(words)}`;

// Function to generate random assignments that we can add to student object.
const getRandomThought = () => {
  return (results = getRandomArrItem(thoughts));
};

// Export the functions for use in seed.js
module.exports = { getRandomUsername, getRandomThought };
