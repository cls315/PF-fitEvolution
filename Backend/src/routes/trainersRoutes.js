const { Router } = require("express");
const allTrainerHndls = require("../handlers/TrainersHndls/getAllTrainerHndls");
const postTrainerHdnls = require("../handlers/TrainersHndls/postTrainerHndls");
const filterByFocus = require("../controllers/Trainers/filterByfocusApi");
const filterFocusScore = require("../controllers/Trainers/filterFocusScore");

const trainersRoutes = Router();

trainersRoutes.get("/allTrainer", allTrainerHndls);
trainersRoutes.post("/", postTrainerHdnls);
trainersRoutes.get("/trainerFocus", filterByFocus) // borrar esta linea, de prueba 
trainersRoutes.get("/filter" , filterFocusScore)
module.exports = trainersRoutes;
