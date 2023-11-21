const filteredTrainers = require("../../controllers/Trainers/filteredTrainers");

const filteredTrainersHndls = async (req, res) => {
  try {
    // Puedes acceder a los parámetros de consulta (query parameters) con req.query
    const { focusTr, orderBy } = req.query;

    const trainers = await filteredTrainers({ focusTr, orderBy });

    return res.status(200).json(trainers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = filteredTrainersHndls;
