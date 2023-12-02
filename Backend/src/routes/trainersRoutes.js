const { Router } = require("express");
const allTrainerHndls = require("../handlers/TrainersHndls/getAllTrainerHndls");
const postTrainerHdnls = require("../handlers/TrainersHndls/postTrainerHndls");
const postTrainerPuntuacionHdnls = require("../handlers/TrainersHndls/postTrainerPuntuacionHdnls");

const getFilterFocusScoreHndls = require("../handlers/TrainersHndls/getFilterFocusScoreHndls");

const trainersRoutes = Router();

trainersRoutes.get("/allTrainer", allTrainerHndls);
trainersRoutes.post("/", postTrainerHdnls);
trainersRoutes.post("/:id/puntuacion", postTrainerPuntuacionHdnls);

trainersRoutes.get("/filter", getFilterFocusScoreHndls);

module.exports = trainersRoutes;
