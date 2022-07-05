const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
} = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get(getThoughts);

// /api/thoughts/:thoughtId
router.route("/:thoughtId").get(getSingleThought);

module.exports = router;
