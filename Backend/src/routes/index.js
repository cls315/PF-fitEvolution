const { Router } = require("express");
const trainersRoutes = require("./trainersRoutes");

const router = Router();

router.use("/trainers", trainersRoutes);

module.exports = router;
