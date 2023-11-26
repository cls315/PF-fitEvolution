const { Router } = require("express");
const getAllExerciseHndls = require("../handlers/ExerciseHndls/getAllExcerciseHndls");
// const postRoutinesHndls = require("../handlers/RoutineHndls/postRoutinesHndls");

const exerciseRoutes = Router();

exerciseRoutes.get("/allExercises", getAllExerciseHndls);
// exerciseRoutes.post("/", postRoutinesHndls);

module.exports = exerciseRoutes;
