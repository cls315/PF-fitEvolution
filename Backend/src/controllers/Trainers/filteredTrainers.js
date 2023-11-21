const { Trainer } = require("../../db");

const filteredTrainers = async ({ focusTr, orderBy }) => {
  let trainers;

  // Verificar si hay filtros
  if (focusTr) {
    trainers = await Trainer.findAll({
      where: { focusTr },
      order: [['score', orderBy === 'desc' ? 'DESC' : 'ASC']],
    });
  } else {
    trainers = await Trainer.findAll({
      order: [['score', orderBy === 'desc' ? 'DESC' : 'ASC']],
    });

    // Puedes agregar la lógica de carga desde la API aquí si es necesario
  }

  if (!trainers) {
    throw new Error("No se encontraron entrenadores en la base de datos");
  }

  return trainers;
};

module.exports = filteredTrainers;
