const axios = require("axios");

const { Routine } = require("../../db");
const { API_RUTINAS } = require("../Trainers/urls");

const getRoutines = async () => {
  // Verificar si hay rutinas cargadas en la base de datos
  const routinesInDB = await Routine.findAll();

  if (routinesInDB.length === 0) {
    // No hay rutinas en la base de datos, cargar desde la API local
    const apiRoutines = (await axios.get(API_RUTINAS)).data;

    // Mapear los datos de la API al modelo de datos de la base de datos
    const mappedRoutines = apiRoutines.map((r) => ({
      exerc: r.exerc,
      totalDuration: r.totalDuration,
      enfoque: r.enfoque,

      // Puedes agregar otros campos aquí según sea necesario
    }));

    // Crear las rutinas en la base de datos
    return await Routine.bulkCreate(mappedRoutines);

    // Obtener las rutinas después de cargarlas desde la API
    const updatedRoutines = await Routine.findAll();

    return updatedRoutines;
  }

  // Hay rutinas en la base de datos, simplemente retornarlas
  return routinesInDB;
};

module.exports = getRoutines;
