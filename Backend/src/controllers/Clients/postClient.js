const { Client } = require("../../db");

const postClient = async (req, res) => {
  console.log('Datos recibidos:', req.body);
  const {forename, surname, image, email, phoneN, nationality, dateOfBirth, dni, gender, backup, blocks, role} = req.body;

  try {
    const createClient = await Client.create({
      forename,
      surname,
      image,
      email,
      phoneN,
      nationality,
      dateOfBirth,
      dni,
      gender,
      backup,
      blocks,
      role
    });



    res.status (201).json(createClient)
  } catch (error) {
    console.error('Error en la creación del cliente:', error);
    res.status(400).json({error: error.message})
  }
};



module.exports= postClient;