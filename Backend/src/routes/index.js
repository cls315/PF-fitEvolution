const { Router } = require("express");
const trainersRoutes = require("./trainersRoutes");
const routinesRoutes = require("./routinesRoutes");

const router = Router();

router.use("/trainers", trainersRoutes);
router.use("/routines", routinesRoutes);

module.exports = router;
