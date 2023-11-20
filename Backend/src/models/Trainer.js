const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('trainer', {
    id:{
      type:DataTypes.UUID,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4
    },
    forename:{
      type: DataTypes.STRING,
      allowNull: false,
      len: {
        args: [2, 50],
        msg: 'La longitud del campo debe estar entre 2 y 50 caracteres.'
      },
      validate: {
        is: {
          args: /^[a-z]+$/i,
          msg: 'Solo se permiten letras en este campo.'
        }
      }
    },
    surname:{
      type: DataTypes.STRING,
      allowNull: false,
      len: {
        args: [2, 50],
        msg: 'La longitud del campo debe estar entre 2 y 50 caracteres.'
      },
      validate: {
        is: {
          args: /^[a-z]+$/i,
          msg: 'Solo se permiten letras en este campo.'
        }
      }
    },
    image:{
      type: DataTypes.TEXT, 
      allowNull: true,
      validate: {
        isUrl: {
          msg: 'La URL de la imagen no es válida.',
        },
      },
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false, 
      unique: true,
      validate: {
        isEmail: {
          msg: 'Ingresa una dirección de correo electrónico válida.',
        },
      },
    },
    phoneN:{
      type: DataTypes.STRING,
      allowNull: false, 
      // validate: {
      //   is: {
      //     args: /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/, 
      //     msg: 'Ingresa un número de teléfono válido.',
      //   },
      // },
    },
    nationality:{
      type: DataTypes.STRING,
      allowNull: false,
      len: {
        args: [2, 50],
        msg: 'La longitud del campo debe estar entre 2 y 50 caracteres.'
      },
      validate: {
        is: {
          args: /^[a-z]+$/i,
          msg: 'Solo se permiten letras en este campo.'
        }
      } 
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: {
          msg: 'Por favor, introduce una fecha de nacimiento válida.',
        },
      },
    },
    dni:{
      type: DataTypes.BIGINT,
    allowNull: false, 
    validate: {
      isInt: {
        msg: 'Ingresa un número de DNI válido.',
      },
      len: {
        args: [7, 9], 
        msg: 'El DNI debe tener entre 7 y 9 dígitos.',
      },
    },
    },
    gender:{
      type: DataTypes.ENUM('Masculino', 'Femenino', 'Otro'),
      allowNull: false,
    }, 
   
    focusTr:{
      type: DataTypes.TEXT,
      allowNull:false,
    },
    description:{
      type: DataTypes.TEXT,
      allowNull:false,
    },
    score: {
      type: DataTypes.DECIMAL(1, 1), 
      validate: {
        isDecimal: true,
        min: 0,
        max: 5,
      },
      set(value) {
    if (value < 0 || value > 5) return value;

    const floored = Math.floor(value);

    if (value - floored >= 0.5) {
      return Math.ceil(value); 
    }

    return floored; 
  },
      defaultValue: 0,
      },
  },{
    timestamps: true, //* en el momento de creacion del usuario, podemos usar esa fecha que se genera para calcular el tiempo de periodo de prueba, y lo mismo con el tiempo de periodo de suscripcion, desde el momento de modificacion.  
  });
};
