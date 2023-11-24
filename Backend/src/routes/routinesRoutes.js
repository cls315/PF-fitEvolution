const { Router } = require("express");
const getRoutinesHndls = require("../handlers/RoutineHndls/getRoutinesHndls");
const getEnfoqueRutinesHndls = require("../handlers/RoutineHndls/getEnfoqueRutinesHndls");

const postRoutinesHndls = require("../handlers/RoutineHndls/postRoutinesHndls");

const routinesRoutes = Router();

routinesRoutes.get("/allRoutines", getRoutinesHndls);
routinesRoutes.post("/", postRoutinesHndls);
routinesRoutes.get("/:enfoque", getEnfoqueRutinesHndls);

module.exports = routinesRoutes;
