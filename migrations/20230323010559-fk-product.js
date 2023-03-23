'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Khoá phụ table Products - Category Child
    await queryInterface.addConstraint('products', {
      fields: ['cate_child_prod'],
      type: 'foreign key',
      // Tên ràng buộc
      name: 'product_fk_1',
      references: {
        table: 'category_child',
        field: 'id_category_child',
      },
    });
    // Khoá phụ table Products - Brand
    await queryInterface.addConstraint('products', {
      fields: ['brand_prod'],
      type: 'foreign key',
      // Tên ràng buộc
      name: 'product_fk_2',
      references: {
        table: 'brands',
        field: 'id_brand',
      },
    });
    // Khoá phụ table Products - Detail Product
    await queryInterface.addConstraint('products', {
      fields: ['id_detail_prod'],
      type: 'foreign key',
      // Tên ràng buộc
      name: 'product_fk_3',
      references: {
        table: 'detail_product',
        field: 'id_detail_main',
      },
    });
    // Khoá phụ table Products - Material
    await queryInterface.addConstraint('products', {
      fields: ['material_prod'],
      type: 'foreign key',
      // Tên ràng buộc
      name: 'product_fk_4',
      references: {
        table: 'material_product',
        field: 'id_material',
      },
    });
    // Khoá phụ table Products - Images
    await queryInterface.addConstraint('products', {
      fields: ['img_prod'],
      type: 'foreign key',
      // Tên ràng buộc
      name: 'product_fk_5',
      references: {
        table: 'img_product',
        field: 'id_images',
      },
    });
    // Khoá phụ table Products - Style
    await queryInterface.addConstraint('products', {
      fields: ['style_prod'],
      type: 'foreign key',
      // Tên ràng buộc
      name: 'product_fk_6',
      references: {
        table: 'style_product',
        field: 'id_style',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    // Khoá phụ table Products - Category Child
    await queryInterface.removeConstraint('products', {
      fields: ['cate_child_prod'],
      type: 'foreign key',
      // Tên ràng buộc
      name: 'product_fk_1',
      references: {
        table: 'category_child',
        field: 'id_category_child',
      },
    });
    // Khoá phụ table Products - Brand
    await queryInterface.removeConstraint('products', {
      fields: ['brand_prod'],
      type: 'foreign key',
      // Tên ràng buộc
      name: 'product_fk_2',
      references: {
        table: 'brands',
        field: 'id_brand',
      },
    });
    // Khoá phụ table Products - Detail Product
    await queryInterface.removeConstraint('products', {
      fields: ['id_detail_prod'],
      type: 'foreign key',
      // Tên ràng buộc
      name: 'product_fk_3',
      references: {
        table: 'detail_product',
        field: 'id_detail_main',
      },
    });
    // Khoá phụ table Products - Material
    await queryInterface.removeConstraint('products', {
      fields: ['material_prod'],
      type: 'foreign key',
      // Tên ràng buộc
      name: 'product_fk_4',
      references: {
        table: 'material_product',
        field: 'id_material',
      },
    });
    // Khoá phụ table Products - Images
    await queryInterface.removeConstraint('products', {
      fields: ['img_prod'],
      type: 'foreign key',
      // Tên ràng buộc
      name: 'product_fk_5',
      references: {
        table: 'img_product',
        field: 'id_images',
      },
    });
    // Khoá phụ table Products - Style
    await queryInterface.removeConstraint('products', {
      fields: ['style_prod'],
      type: 'foreign key',
      // Tên ràng buộc
      name: 'product_fk_6',
      references: {
        table: 'style_product',
        field: 'id_style	',
      },
    });
  },
};
