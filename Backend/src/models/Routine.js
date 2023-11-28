const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("routine", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    exerc: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false,
    },
    totalDuration: {
      type: DataTypes.VIRTUAL,
      get() {
        return this.exerc.reduce((total, exerc) => {
          return total + exerc.estimatedDuration;
        }, 0);
      },
      get duration() {
        const totalSeconds = this.totalDuration;
        return `${Math.floor(totalSeconds / 60)}m ${totalSeconds % 60}s`;
      },
    },
    enfoque: {
      type: DataTypes.STRING, // Puedes ajustar el tipo de datos según sea necesario
      allowNull: true, // O false, dependiendo de si el enfoque debe ser obligatorio o no
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        isUrl: {
          msg: "La URL de la imagen no es válida.",
        },
      },
    },
  });
};
