const { Routine } = require("../../db");

const getRoutines = async () => {
  const routines = await Routine.findAll();

  if (!routines.length)
    throw new Error("No se encontraron rutinas en la base de datos");

  return routines;
};

module.exports = getRoutines;
