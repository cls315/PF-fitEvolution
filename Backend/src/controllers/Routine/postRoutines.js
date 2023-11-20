const { Routine } = require("../../db");

const postRoutines = async (exerc, totalDuration) => {
  const newRoutine = await Routine.create({
    exerc,
    totalDuration,
  });

  return newRoutine;
};

module.exports = postRoutines;
