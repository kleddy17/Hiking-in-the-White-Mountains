'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.hike.belongsToMany(models.user, {through: "UserHike"})
    }
  };
  hike.init({
    name: DataTypes.STRING,
    difficulty: DataTypes.STRING,
    location: DataTypes.STRING,
    summary: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hike',
  });
  return hike;
};