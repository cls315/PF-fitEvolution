const { Router } = require("express");
const getRoutinesHndls = require("../handlers/RoutineHndls/getRoutinesHndls");
const postRoutinesHndls = require("../handlers/RoutineHndls/postRoutinesHndls");

const routinesRoutes = Router();

routinesRoutes.get("/allRoutines", getRoutinesHndls);
routinesRoutes.post("/", postRoutinesHndls);

module.exports = routinesRoutes;
