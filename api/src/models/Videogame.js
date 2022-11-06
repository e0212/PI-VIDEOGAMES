
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('videogame', {
          id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
          },
          name: {
            type: DataTypes.STRING(100),
            allowNull: false,
          },
          description: {
            type: DataTypes.STRING(1500),
            allowNull: false,
          },
          released: {
            type: DataTypes.STRING(10),
            allowNull: false,
            validate: {
              isDate: true,
            }
          },
          rating: {
            type: DataTypes.DECIMAL(10,1),
            allowNull: false,
            validate: {
              min: 0,
              max: 5,
            }
          },
          createdAtDb: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
          },
          image: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
              isUrl: true
            }
          },
    },
  {
    timestamps: false,
  }
  );
};