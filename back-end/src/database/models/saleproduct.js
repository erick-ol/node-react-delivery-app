// const { DataTypes } = require('sequelize');
// test
// module.exports = (sequelize) => {
//   const SaleProduct = sequelize.define('salesProduct', { 
//   //   saleId: {
//   //     type: DataTypes.INTEGER,
//   //     allowNull: false,
//   //     primaryKey: true,
//   //   }
//   // },
//   //   {
//   //     productId: {
//   //       type: DataTypes.INTEGER,
//   //       allowNull: false,
//   //       primaryKey: true,
//   //     }
//   //   },
//     // {
//       quantity: {
//         allowNull: false,
//         type: DataTypes.INTEGER,
//       }
//     },
//     {
//       timestamps: false,
//       underscored: true,
//       tableName: 'salesProducts',
//     });
// /** 
//  * usar a Associação muitos-para-muitos com uma tabela de junção. N:N belongsToMany
//  * consulta ao site - https://sequelize.org/api/v6/class/src/associations/belongs-to-many.js~belongstomany 
// */
// SaleProduct.associate = (models) => {
//   models.product.belongsToMany(models.sale, {
//     as: 'sales',
//     foreignKey: 'productId',
//     through: SaleProduct,
//     otherKey: 'saleId',
//   })

//   models.sale.belongsToMany(models.product, {
//     as: 'products',
//     foreignKey: 'saleId',
//     through: SaleProduct,
//     otherKey: 'productId',
//   })
// }
// return SaleProduct;
// };
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
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SalesProduct,
      foreignKey: { name: 'saleId', field: 'sale_id' },
      otherKey: { name: 'productId', field: 'product_id'},
    });

    models.Product.belongsToMany(models.Sale, {
      as: 'sales', 
      through: SalesProduct,
      foreignKey: { name: 'productId', field: 'product_id'},
      otherKey: { name: 'saleId', field: 'sale_id' },
    });
  }

  return SalesProduct;
};
