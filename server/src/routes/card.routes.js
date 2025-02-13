const router = require("express").Router();
const CardController = require("../controllers/Card.controller");

router.get("/", CardController.getAll);
router.get("/:id", CardController.getById);

module.exports = router;
