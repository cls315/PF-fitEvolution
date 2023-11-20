const { Router } = require("express");
const allTrainerHndls = require("../handlers/TrainersHndls/getAllTrainerHndls");
const postTrainerHdnls = require("../handlers/TrainersHndls/postTrainerHndls");

const trainersRoutes = Router();

trainersRoutes.get("/allTrainer", allTrainerHndls);
trainersRoutes.post("/", postTrainerHdnls);

module.exports = trainersRoutes;
