const router = require("express").Router();
const authRoutes = require("./user.routes");
const deckRoutes = require("./deck.routes");
const cardRoutes = require("./card.routes");
const formatResponse = require("../utils/formatResponse");

router
  .use("/auth", authRoutes)
  .use("/decks", deckRoutes)
  .use("/cards", cardRoutes);

router.use("*", (req, res) => {
  res
    .status(404)
    .json(formatResponse(404, "Not found", null, "Resource not found"));
});

module.exports = router;
