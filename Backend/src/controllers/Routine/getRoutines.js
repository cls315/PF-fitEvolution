// getRoutines.js

const axios = require("axios");
const { Routine } = require("../../db");
const { API_RUTINAS } = require("../urls");

const getRoutines = async () => {
  const routinesInDB = await Routine.findAll();

  if (routinesInDB.length === 0) {
    const apiRoutines = (await axios.get(API_RUTINAS)).data;
    const mappedRoutines = apiRoutines.map((r) => ({
      exerc: r.exerc,
      totalDuration: r.totalDuration,
      enfoque: r.enfoque,
    }));

    // Crear las rutinas en la base de datos
    await Routine.bulkCreate(mappedRoutines);
  }

  // Obtener las rutinas después de cargarlas desde la API o desde la base de datos
  const updatedRoutines = await Routine.findAll();
  return updatedRoutines;
};

module.exports = getRoutines;
