'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Incidents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Incidents.init({
    client_id: DataTypes.STRING,
    incident_desc: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    date: DataTypes.STRING,
    weather_report: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Incidents',
  });
  return Incidents;
};