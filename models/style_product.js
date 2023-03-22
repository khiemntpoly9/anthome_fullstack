'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class style_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  style_product.init({
    id_style: DataTypes.INTEGER,
    name_style: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'style_product',
  });
  return style_product;
};