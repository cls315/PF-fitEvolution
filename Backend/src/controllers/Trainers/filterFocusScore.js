
// const { Trainer } = require("../../db");
const getAllTrainer = require("./getAllTrainer");

const filterFocusScore = async (req, res) => {
  try {
    const { focus, score , sortByFocus, sortByScore } = req.query;
    let trainers = await getAllTrainer();

    // Aplicar filtros si se proporcionan
    if (focus) {
      trainers = trainers.filter(trainer => trainer.focusTr === focus);
    }

    if (score) {
      trainers = trainers.filter(trainer => trainer.score === score);
    }

      
  
    // Ordenar por ambos filtros si se proporcionan
    if (sortByFocus) {
      trainers.sort((a, b) => {
        if (sortByFocus.toUpperCase() === 'ASC') {
          return a.focusTr.localeCompare(b.focusTr);
        } else if (sortByFocus.toUpperCase() === 'DESC') {
          return b.focusTr.localeCompare(a.focusTr);
        }
        // Agrega manejo para otros casos si es necesario
      });
    }
    
    if (sortByScore) {
      trainers.sort((a, b) => {
        if (sortByScore.toUpperCase() === 'ASC') {
          return a.score - b.score;
        } else if (sortByScore.toUpperCase() === 'DESC') {
          return b.score - a.score;
        }
        // Agrega manejo para otros casos si es necesario
      });
    }
    
    res.json(trainers);

  } catch (error) {
   
    res.status(400).json({ error: 'Error al obtener entrenadores con filtros' });
  }
};

module.exports = filterFocusScore;