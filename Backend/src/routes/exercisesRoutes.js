const { Router } = require("express");
const getAllExerciseHndls = require("../handlers/ExerciseHndls/getAllExcerciseHndls");
const postExerciseHndls = require("../handlers/ExerciseHndls/postExerciseHndls");

const exerciseRoutes = Router();

exerciseRoutes.get("/allExercises", getAllExerciseHndls);
exerciseRoutes.post("/", postExerciseHndls);

module.exports = exerciseRoutes;
