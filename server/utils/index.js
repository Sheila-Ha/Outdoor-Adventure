const router = require("express").Router();

const userRoutes = require("./api/user-routes");
const openAIRoutes = require("./api/openai-routes");

router.use("/api/users", userRoutes);
router.use("/api/openai", openAIRoutes);

module.exports = router;
