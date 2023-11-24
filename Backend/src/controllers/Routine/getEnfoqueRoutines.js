// En tu archivo controllers/Routine/getEnfoqueRoutines.js (o donde lo tengas)

// Importa tu modelo o método de obtención de rutinas
const { Routine } = require("../../db");
const getRoutines = require("./getRoutines"); // Importa la función para cargar rutinas desde la API

async function getEnfoqueRoutines(enfoque) {
  try {
    // Obtener las rutinas desde la base de datos filtrando por enfoque
    const rutinasEnDB = await Routine.findAll({
      where: {
        enfoque: enfoque,
      },
    });

    if (rutinasEnDB.length === 0) {
      // No hay rutinas en la base de datos, cargar desde la API
      await getRoutines();
    }

    // Volver a intentar obtener las rutinas después de la carga (puede ser las recién cargadas o las que ya estaban)
    const rutinasActualizadas = await Routine.findAll({
      where: {
        enfoque: enfoque,
      },
    });

    return rutinasActualizadas;
  } catch (error) {
    // Manejo de errores si la obtención falla
    throw new Error(`Error al obtener rutinas por enfoque: ${error.message}`);
  }
}

module.exports = getEnfoqueRoutines;
