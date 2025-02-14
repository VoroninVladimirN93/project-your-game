const router = require("express").Router();
const GameController = require("../controllers/Game.controller");

router.get("/", GameController.getAll);
router.get("/:id", GameController.getById);

module.exports = router;
