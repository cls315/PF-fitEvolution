const { Router } = require("express");
const trainersRoutes = require("./trainersRoutes");
const routinesRoutes = require("./routinesRoutes");
const clientRoutes = require("./clientRoutes");
const nodemailerRoutes=require("./nodemailer-rutas")
const router = Router();

router.use("/trainers", trainersRoutes);
router.use("/routines", routinesRoutes);
router.use("/clients" , clientRoutes );
router.use("/nodemailer", nodemailerRoutes)

module.exports = router;
