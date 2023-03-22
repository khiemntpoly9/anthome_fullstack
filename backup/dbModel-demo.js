// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/connectDB');

// // 1 Model tương đương với 1 bảng cơ sở dữ liệu
// // Ta sử dụng phương thức define() của đối tượng sequelize để định nghĩa model này.

// // Lưu ý CỰC CAO: HÃY BACKUP DỮ LIỆU TRƯỢC KHI CHẠY CODE, NẾU KHÔNG SẼ BỊ DROP TABLE VÌ KHÔNG ĐÚNG KIỂU DỮ LIỆU

// // Category Model
// const Category = sequelize.define(
//   'category',
//   {
//     id_category: {
//       type: DataTypes.INTEGER(5),
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name_category: {
//       type: DataTypes.STRING(255),
//       allowNull: false,
//     },
//     category_child: {
//       type: DataTypes.INTEGER(5),
//       references: {
//         model: CategoryChild,
//         key: 'id_category_child',
//       },
//     },
//   },
//   {
//     timestamps: true,
//     freezeTableName: true, // đặt freezeTableName là true
//   }
// );

// // Category Child Model
// const CategoryChild = sequelize.define('category_child', {
//   id_category_child: {
//     type: DataTypes.INTEGER(5),
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   name_category_child: {
//     type: DataTypes.STRING(255),
//   },
// });

// // Product Model
// const Product = sequelize.define(
//   'products',
//   {
//     id: {
//       type: DataTypes.INTEGER(5),
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     idCateProduct: {
//       type: DataTypes.INTEGER(5),
//       allowNull: false,
//       references: {
//         model: Category,
//         key: 'idCate',
//       },
//     },
//     nameProduct: {
//       type: DataTypes.STRING(255),
//       allowNull: false,
//     },
//     priceProduct: {
//       type: DataTypes.DECIMAL(10, 0),
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.STRING(255),
//       allowNull: true,
//     },
//     image_url: {
//       type: DataTypes.STRING(255),
//       allowNull: true,
//     },
//   },
//   {
//     timestamps: true,
//     freezeTableName: true, // đặt freezeTableName là true
//   }
// );

// // Role Model
// const Role = sequelize.define(
//   'role',
//   {
//     idRole: {
//       type: DataTypes.INTEGER(5),
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     nameRole: {
//       type: DataTypes.STRING(50),
//       unique: true,
//       allowNull: false,
//     },
//     name: {
//       type: DataTypes.STRING(255),
//       allowNull: false,
//     },
//   },
//   {
//     timestamps: true,
//     freezeTableName: true,
//   }
// );

// // User Model
// const User = sequelize.define(
//   'users',
//   {
//     id: {
//       type: DataTypes.INTEGER(5),
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     fullName: {
//       type: DataTypes.STRING(255),
//       allowNull: true,
//     },
//     userName: {
//       type: DataTypes.STRING(255),
//       allowNull: false,
//       unique: true,
//     },
//     img_avt: {
//       type: DataTypes.STRING(255),
//     },
//     password: {
//       type: DataTypes.STRING(255),
//       allowNull: false,
//     },
//     roleid: {
//       type: DataTypes.INTEGER(5),
//       allowNull: false,
//       defaultValue: 3,
//       references: {
//         model: Role,
//         key: 'idRole',
//       },
//     },
//     token: {
//       type: DataTypes.STRING(255),
//       allowNull: true,
//     },
//   },
//   {
//     timestamps: true,
//     freezeTableName: true,
//   }
// );

// // Hãy thêm dòng này để Sequelize tự tạo 2 cột createdAt và updatedAt
// // {
// //      timestamps: true,
// // }
// // Cột createdAt, updateAt là 2 cột mặc định của sequelize
// // {
// //      timestamps: false // Vô hiệu hóa createdAt và updatedAt
// // }
// // or đổi tên 2 côt này
// // {
// //      createdAt: 'created', // Đổi tên cột createdAt thành created
// //      updatedAt: 'updated'  // Đổi tên cột updatedAt thành updated
// // }

// // Nếu bật động bộ Models, sẽ tự tạo database theo mẫu của Models
// // Kiểu Number không được hỗ trợ trên Mysql, hãy dùng kiểu Integer

// // Bố m commet lại :)
// // async function syncModels() {
// //   /*
// //     Kiểm tra bảng trong cơ sở dữ liệu (có những trường nào, kiểu dữ liệu là gì ...)
// //     sau đó sẽ thay đổi phù hợp với model
// //     */
// //   await sequelize.sync({ alter: true });
// //   console.log('Models synced successfully.');
// // }
// // syncModels();

// // 1-N: 1 Danh mục có nhiều danh mục con
// Category.hasMany(CategoryChild, { foreignKey: 'category_child' });
// // N-1: 1 Danh mục con chỉ có 1 danh mục mẹ
// CategoryChild.belongsTo(Category, { foreignKey: 'category_child' });

// module.exports = { Category, Product, Role, User };
