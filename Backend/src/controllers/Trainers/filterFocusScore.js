
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