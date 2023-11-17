const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('exercise', {
    id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    },
    name:{
        type: DataTypes.STRING,
      allowNull: false,
      len: {
        args: [2, 50],
        msg: 'La longitud del campo debe estar entre 2 y 50 caracteres.'
      },
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    Category: {
        type: DataTypes.ENUM('TS','TI','CORE'),
        allowNull: false,
      },
    muscle_trained:{
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
    }
    }
  )}
