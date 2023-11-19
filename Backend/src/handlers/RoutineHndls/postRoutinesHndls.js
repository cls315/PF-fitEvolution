const postRoutines = require("../../controllers/Routine/postRoutines");

const postRoutinesHndls = async (req, res) => {
  const { exerc, totalDuration } = req.body;

  try {
    const newRoutine = await postRoutines(exerc, totalDuration);

    res.status(200).json(newRoutine);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = postRoutinesHndls;
