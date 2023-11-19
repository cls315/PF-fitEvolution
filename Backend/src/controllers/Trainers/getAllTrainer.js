const { Trainer } = require("../../db");

const allTrainer = async () => {
  const trainer = await Trainer.findAll();

  if (!trainer)
    throw new Error("No se encontraron Entrenadores en la base de datos");

  return trainer;
};

module.exports = allTrainer;
