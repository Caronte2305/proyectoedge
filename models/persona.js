'use strict';
module.exports = (sequelize, DataTypes) => {
  var persona = sequelize.define('persona', {
    nombre: DataTypes.STRING,
    cedula: DataTypes.STRING
  }, {});
  persona.associate = function(models) {
    // associations can be defined here
  };
  return persona;
};