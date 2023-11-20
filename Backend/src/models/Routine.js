const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('routine', {
    id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    },
    exerc: {
          type: DataTypes.ARRAY(DataTypes.STRING),
          allowNull: false, 
        },
    totalDuration: {
          type: DataTypes.VIRTUAL,
          get() {
            return this.exercises.reduce((total, exercise) => {
              return total + exercise.estimatedDuration; 
            }, 0)
          },
          get duration() {
            const totalSeconds = this.totalDuration;
            return `${Math.floor(totalSeconds / 60)}m ${totalSeconds % 60}s`;
          }
        }
        
    }
  )}
