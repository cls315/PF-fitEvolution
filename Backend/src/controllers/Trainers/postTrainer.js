const { Trainer } = require("../../db");

const postTrainer = async (
  forename,
  surname,
  image,
  email,
  phoneN,
  nationality,
  dateOfBirth,
  dni,
  gender,
  focusTr,
  description,
  score
) => {
  const newTrainer = await Trainer.create({
    forename,
    surname,
    image,
    email,
    phoneN,
    nationality,
    dateOfBirth,
    dni,
    gender,
    focusTr,
    description,
    score,
  });

  return newTrainer;
};

module.exports = postTrainer;
