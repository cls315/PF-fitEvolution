const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('client', {
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
      allowNull: false,
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
      validate: {
        is: {
          args: /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/, 
          msg: 'Ingresa un número de teléfono válido.',
        },
      },
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
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: {
          msg: 'Por favor, introduce una fecha de nacimiento válida.',
        },
      },
    },
    dni:{
      type: DataTypes.INTEGER,
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
    //?momentaneamente el campo backup y el campo bloqueos están armados con un type text cosa que se pueda escribir, se puede readaptar
    backup:{
      type: DataTypes.TEXT,
      allowNull:true,
    },
    blocks:{
      type: DataTypes.TEXT,
      allowNull:true,
    },
    role:{
        type: DataTypes.ENUM('Usuario', 'Admin'),
        allowNull: false,
        defaultValue: 'Usuario', 
    }
  },{
    timestamps: true, //* en el momento de creacion del usuario, podemos usar esa fecha que se genera para calcular el tiempo de periodo de prueba, y lo mismo con el tiempo de periodo de suscripcion, desde el momento de modificacion.  
  });
};
