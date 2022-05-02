const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Product = sequelize.define('product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL(4,2)
    },
    urlImage: {
      allowNull: false,
      type: DataTypes.STRING
    }
  },
    {
      timestamps: false,
      tableName: 'products',
    });

  return Product;
};
