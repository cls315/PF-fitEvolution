require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/fitevolution`,
  { logging: false, native: false }
);
// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
   entry[0][0].toUpperCase() + entry[0].slice(1),
   entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Trainer, Client,Routine,Exercise } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Client.belongsToMany(Trainer, { through: 'ClientTrainer' });
Trainer.belongsToMany(Client, { through: 'ClientTrainer' });

Exercise.belongsToMany(Routine, { through: 'ExerciseRoutine' });
Routine.belongsToMany(Exercise, { through: 'ExerciseRoutine' });
module.exports = {
   ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
   conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};





