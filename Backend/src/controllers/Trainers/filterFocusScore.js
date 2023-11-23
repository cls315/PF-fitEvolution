<<<<<<< HEAD
const getAllTrainer = require("./getAllTrainer");

const filterFocusScore = async (req, res) => {
  let trainers = await getAllTrainer();
  console.log(trainers);
  try {
    // Recibir parámetros de filtro desde la solicitud

    // Procesar parámetros y construir la consulta
    const consulta = construirConsulta(focusTr, order);

    // Ejecutar la consulta (filtrar y ordenar los entrenadores)
    const entrenadoresFiltrados = ejecutarFiltradoYOrden(consulta);

    // Devolver los resultados al cliente
    res.json(entrenadoresFiltrados);
  } catch (error) {
    // Manejar cualquier error que ocurra durante la ejecución del bloque try
    console.error("Error en filterFocusScore:", error);
    res.status(500).json({ error: "Hubo un error en el servidor" });
  }
};

// Función para construir la consulta según los parámetros de filtro
function construirConsulta(focusTr, order) {
  // Aquí puedes construir la consulta según los parámetros recibidos
  // Puedes adaptar esto según el sistema de almacenamiento que estés utilizando
  const consulta = {};

  // Agrega el filtro por focusTr si se proporciona
  if (focusTr) {
    consulta.focusTr = focusTr;
  }

  // Agrega el ordenamiento por score si se proporciona
  if (order) {
    consulta.order = order;
  }

  return consulta;
}

// Función para ejecutar el filtrado y ordenamiento en los datos de entrenadores
function ejecutarFiltradoYOrden(consulta) {
  // Filtra los entrenadores según el focusTr

  let entrenadoresFiltrados = trainers;
  if (consulta.focusTr) {
    entrenadoresFiltrados = entrenadoresFiltrados.filter(
      (trainers) => trainers.focusTr === consulta.focusTr
    );
  }

  // Ordena los entrenadores según el score
  if (consulta.order === "asc") {
    entrenadoresFiltrados.sort((a, b) => a.score - b.score);
  } else if (consulta.order === "desc") {
    entrenadoresFiltrados.sort((a, b) => b.score - a.score);
  }

  return entrenadoresFiltrados;
}

module.exports = filterFocusScore;
=======

const getAllTrainer = require("./getAllTrainer");

const filterFocusScore = async (req, res) => {
  try {
    const { focus, score } = req.query;
    let trainers = await getAllTrainer();

    // Aplicar filtros si se proporcionan
    if (focus) {
      trainers = trainers.filter(trainer => trainer.focusTr === focus);
    }

    if (score) {
      trainers = trainers.filter(trainer => trainer.score === score);
    }



    res.json(trainers);
  } catch (error) {
   
    res.status(400).json({ error: 'Error al obtener entrenadores con filtros' });
  }
};

module.exports = filterFocusScore;
>>>>>>> 283e20a8e74e0d091f73d4afbc2206908304f9a4
