const { exercise } = require("../models/exercise");

const getExercise = async (req, res) => {
  try {
    const exercises = await exercise.findAll();

    const response = exercises.data;
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



module.exports = getExercise;