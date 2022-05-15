module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    quantity: DataTypes.INTEGER,
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'salesProducts',
    underscored: true,
  });

  SalesProduct.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      as: 'products',
      through: SalesProduct,
      foreignKey: { name: 'saleId', field: 'sale_id' },
      otherKey: { name: 'productId', field: 'product_id'},
    });

    models.product.belongsToMany(models.sale, {
      as: 'sales', 
      through: SalesProduct,
      foreignKey: { name: 'productId', field: 'product_id'},
      otherKey: { name: 'saleId', field: 'sale_id' },
    });
  }

  return SalesProduct;
};
