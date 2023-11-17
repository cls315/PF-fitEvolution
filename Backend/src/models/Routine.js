const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('routine', {
    id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    },
    exercises: {
          type: DataTypes.ARRAY(DataTypes.STRING),
          allowNull: false, 
        },
  
    }
  )}
