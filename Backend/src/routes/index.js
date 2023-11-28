const { Router } = require("express");
const trainersRoutes = require("./trainersRoutes");
const routinesRoutes = require("./routinesRoutes");
const clientRoutes = require("./clientRoutes");
const exercisesRoutes = require("./exercisesRoutes");

const router = Router();

router.use("/trainers", trainersRoutes);
router.use("/routines", routinesRoutes);
router.use("/clients", clientRoutes);
router.use("/exercises", exercisesRoutes);

module.exports = router;
