'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('salesProducts', {
//       saleId: {
//         allowNull: false,
//         primaryKey: true,
//         field: 'sale_id',
//         onDelete: 'CASCADE',
//         onUpdate: 'CASCADE',
//         type: Sequelize.INTEGER,
//         references: {
//           model: 'sales',
//           key: 'id'
//         }
//       },
//       productId: {
//         allowNull: false,
//         primaryKey: true,
//         field: 'product_id',
//         onDelete: 'CASCADE',
//         onUpdate: 'CASCADE',
//         type: Sequelize.INTEGER,
//         references: {
//           model: 'products',
//           key: 'id'
//         }
//       },
//       quantity: {
//         allowNull: false,
//         type: Sequelize.INTEGER,
//       }
//     });
//   },
//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable('salesProducts');
//   }
// };
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('salesProducts', {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      saleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'sale_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'sales',
          key: 'id',
        },
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'product_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'products',
          key: 'id',
        },
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('salesProducts');
  }
};
