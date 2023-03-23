'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Khoá phụ Users - Role
    await queryInterface.addConstraint('users', {
      fields: ['id_role'],
      type: 'foreign key',
      // Tên ràng buộc
      name: 'idrole_fk',
      references: {
        table: 'role',
        field: 'id_role',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    // Khoá phụ Users - Role
    await queryInterface.removeConstraint('users', {
      fields: ['id_role'],
      type: 'foreign key',
      // Tên ràng buộc
      name: 'idrole_fk',
      references: {
        table: 'role',
        field: 'id_role',
      },
    });
  },
};
