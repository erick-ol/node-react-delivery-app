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
      field: 'user_id',
      type: DataTypes.INTEGER,
    },
    sellerId: {
      allowNull: false,
      field: 'seller_id',
      type: DataTypes.INTEGER,
    },
    totalPrice: {
      allowNull: false,
      field: 'total_price',
      type: DataTypes.DECIMAL(9,2),
    },
    deliveryAddress: {
      allowNull: false,
      field: 'delivery_address',
      type: DataTypes.STRING,
    },
    deliveryNumber: {
      allowNull: false,
      field: 'delivery_number',
      type: DataTypes.STRING,
    },
    saleDate: {
      allowNull: true,
      field: 'sale_date',
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