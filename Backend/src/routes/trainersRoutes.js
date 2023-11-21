const { Router } = require("express");
const allTrainerHndls = require("../handlers/TrainersHndls/getAllTrainerHndls");
const postTrainerHdnls = require("../handlers/TrainersHndls/postTrainerHndls");
const filteredTrHandl = require ('../handlers/TrainersHndls/filteredTrHandl')

const trainersRoutes = Router();

trainersRoutes.get("/allTrainer", allTrainerHndls);
trainersRoutes.get("/filteredTrainers", filteredTrHandl)
trainersRoutes.post("/", postTrainerHdnls);

module.exports = trainersRoutes;
