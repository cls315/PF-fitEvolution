
// const { Trainer } = require("../../db");
const getAllTrainer = require("./getAllTrainer");

const filterFocusScore = async (req, res) => {
  try {
    const { focus, score , sortByFocus, sortByScore } = req.query;
    let trainers = await getAllTrainer();

    //filtro por score y focus
    if (focus) {
      trainers = trainers.filter(trainer => trainer.focusTr === focus);
    }

    if (score) {
      trainers = trainers.filter(trainer => trainer.score === score);
    }

      
  
    // ordenamiento asc y desc por focus y score
    if (sortByFocus) {
      trainers.sort((a, b) => {

        const secondString = (str) => str.replace(/^Entrenamiento de /, '');

        const focusA = secondString(a.focusTr);
        const focusB = secondString(b.focusTr);




        if (sortByFocus.toUpperCase() === 'ASC') {
          return focusA.localeCompare(focusB);
        } else if (sortByFocus.toUpperCase() === 'DESC') {
          return focusB.localeCompare(focusA);
        }
        
      });
    }
    
    if (sortByScore) {
      trainers.sort((a, b) => {
        if (sortByScore.toUpperCase() === 'ASC') {
          return a.score - b.score;
        } else if (sortByScore.toUpperCase() === 'DESC') {
          return b.score - a.score;
        }
       
      });
    }
    
    res.json(trainers);

  } catch (error) {
   
    res.status(400).json({ error: 'Error al obtener entrenadores con filtros' });
  }
};

module.exports = filterFocusScore;