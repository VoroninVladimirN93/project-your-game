const router = require("express").Router();
const DeckController = require("../controllers/Deck.controller");

router.get("/", DeckController.getAll);

module.exports = router;
