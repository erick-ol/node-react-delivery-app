const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const SaleProduct = sequelize.define('saleProduct',
    {
      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
      }
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'salesProducts',
    });
/** 
 * usar a Associação muitos-para-muitos com uma tabela de junção. N:N belongsToMany
 * consulta ao site - https://sequelize.org/api/v6/class/src/associations/belongs-to-many.js~belongstomany 
*/
SaleProduct.associate = (models) => {
  models.product.belongsToMany(models.sale, {
    as: 'sales',
    foreignKey: 'productId',
    through: SaleProduct,
    otherKey: 'saleId',
  })

  models.sale.belongsToMany(models.product, {
    as: 'products',
    foreignKey: 'saleId',
    through: SaleProduct,
    otherKey: 'productId',
  })
}
return SaleProduct;
};