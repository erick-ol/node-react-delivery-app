const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Sale = sequelize.define('sale', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    sellerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    totalPrice: {
      allowNull: false,
      type: DataTypes.DECIMAL(9,2),
    },
    deliveryAddress: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    deliveryNumber: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    saleDate: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    status: {
      allowNull: true,
      type: DataTypes.STRING,
    }
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'sales',
    });

  Sale.associate = (models) => {
    Sale.belongsTo(models.user, { as: 'user', foreignKey: 'id' })
  }
  return Sale;
};