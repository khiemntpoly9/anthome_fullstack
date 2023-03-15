const { DataTypes } = require('sequelize');
const sequelize = require('../config/connectDB');

// 1 Model tương đương với 1 bảng cơ sở dữ liệu
// Ta sử dụng phương thức define() của đối tượng sequelize để định nghĩa model này.

// Lưu ý CỰC CAO: HÃY BACKUP DỮ LIỆU TRƯỢC KHI CHẠY CODE, NẾU KHÔNG SẼ BỊ DROP TABLE VÌ KHÔNG ĐÚNG KIỂU DỮ LIỆU

// Category Model
const Category = sequelize.define(
  'category',
  {
    id_category: {
      type: DataTypes.INTEGER(5),
      primaryKey: true,
      autoIncrement: true,
    },
    name_category: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    freezeTableName: true, // đặt freezeTableName là true
  }
);

// Category Child Model
const CategoryChild = sequelize.define(
  'category_child',
  {
    id_category_child: {
      type: DataTypes.INTEGER(5),
      primaryKey: true,
      autoIncrement: true,
    },
    name_category_child: {
      type: DataTypes.STRING(255),
    },
    id_category_product: {
      type: DataTypes.INTEGER(5),
      references: {
        model: Category,
        key: 'id_category',
      },
    },
  },
  {
    timestamps: true,
    freezeTableName: true, // đặt freezeTableName là true
  }
);

// Brand Model
const Brand = sequelize.define(
  'brands',
  {
    id_brand: {
      type: DataTypes.INTEGER(5),
      primaryKey: true,
      allowNull: false,
    },
    name_brand: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    freezeTableName: true, // đặt freezeTableName là true
  }
);

// Detai Product
const DetailProd = sequelize.define(
  'detail_product',
  {
    id_detail_main: {
      type: DataTypes.INTEGER(5),
      primaryKey: true,
      allowNull: false,
    },
    detail_prod: {
      type: DataTypes.TEXT,
    },
    description_prod: {
      type: DataTypes.TEXT,
    },
    specification_prod: {
      type: DataTypes.TEXT,
    },
    preserve_prod: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
    freezeTableName: true, // đặt freezeTableName là true
  }
);

// Color Model
const Colors = sequelize.define(
  'colors',
  {
    id_color: {
      type: DataTypes.INTEGER(5),
      primaryKey: true,
    },
    name_color: {
      type: DataTypes.STRING(30),
    },
    hex_color: {
      type: DataTypes.STRING(7),
    },
  },
  {
    timestamps: true,
    freezeTableName: true, // đặt freezeTableName là true
  }
);

// Material Product
const MaterialProd = sequelize.define(
  'material_product',
  {
    id_material: {
      type: DataTypes.INTEGER(5),
      primaryKey: true,
    },
    name_material: {
      type: DataTypes.STRING(255),
    },
  },
  {
    timestamps: true,
    freezeTableName: true, // đặt freezeTableName là true
  }
);

// Image Product
const ImageProd = sequelize.define(
  'img_product',
  {
    id_images: {
      type: DataTypes.INTEGER(5),
      primaryKey: true,
    },
    img_1: {
      type: DataTypes.STRING(255),
    },
    img_2: {
      type: DataTypes.STRING(255),
    },
    img_3: {
      type: DataTypes.STRING(255),
    },
    img_4: {
      type: DataTypes.STRING(255),
    },
  },
  {
    timestamps: true,
    freezeTableName: true, // đặt freezeTableName là true
  }
);

// Style Product
const StyleProd = sequelize.define(
  'style_product',
  {
    id_style: {
      type: DataTypes.INTEGER(5),
      primaryKey: true,
    },
    name_style: {
      type: DataTypes.STRING(255),
    },
  },
  {
    timestamps: true,
    freezeTableName: true, // đặt freezeTableName là true
  }
);

// Product Model
const Product = sequelize.define(
  'products',
  {
    id_product: {
      type: DataTypes.INTEGER(5),
      primaryKey: true,
      autoIncrement: true,
    },
    name_prod: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    cate_child_prod: {
      type: DataTypes.INTEGER(5),
      references: {
        model: CategoryChild,
        key: 'id_category_child',
      },
    },
    brand_prod: {
      type: DataTypes.INTEGER(5),
      references: {
        model: Brand,
        key: 'id_brand',
      },
    },
    id_detail_prod: {
      type: DataTypes.INTEGER(5),
      references: {
        model: DetailProd,
        key: 'id_detail_main',
      },
    },
    price_prod: {
      type: DataTypes.DECIMAL(10, 0),
    },
    material_prod: {
      type: DataTypes.INTEGER(5),
      references: {
        model: MaterialProd,
        key: 'id_material',
      },
    },
    img_prod: {
      type: DataTypes.INTEGER(5),
      references: {
        model: ImageProd,
        key: 'id_images',
      },
    },
    style_prod: {
      type: DataTypes.INTEGER(5),
      references: {
        model: StyleProd,
        key: 'id_style',
      },
    },
  },
  {
    timestamps: true,
    freezeTableName: true, // đặt freezeTableName là true
  }
);

// Color Product Model
const ColorProd = sequelize.define(
  'product_color',
  {
    product_id: {
      type: DataTypes.INTEGER(5),
      primaryKey: true,
      references: {
        model: Product,
        key: 'id_product',
      },
    },
    color_id: {
      type: DataTypes.INTEGER(5),
      primaryKey: true,
      references: {
        model: Colors,
        key: 'id_color',
      },
    },
  },
  {
    timestamps: false,
    freezeTableName: true, // đặt freezeTableName là true
  }
);

// Hãy thêm dòng này để Sequelize tự tạo 2 cột createdAt và updatedAt
// {
//      timestamps: true,
// }
// Cột createdAt, updateAt là 2 cột mặc định của sequelize
// {
//      timestamps: false // Vô hiệu hóa createdAt và updatedAt
// }
// or đổi tên 2 côt này
// {
//      createdAt: 'created', // Đổi tên cột createdAt thành created
//      updatedAt: 'updated'  // Đổi tên cột updatedAt thành updated
// }

// Nếu bật động bộ Models, sẽ tự tạo database theo mẫu của Models
// Kiểu Number không được hỗ trợ trên Mysql, hãy dùng kiểu Integer

// Bố m commet lại :)
// async function syncModels() {
//   /*
//     Kiểm tra bảng trong cơ sở dữ liệu (có những trường nào, kiểu dữ liệu là gì ...)
//     sau đó sẽ thay đổi phù hợp với model
//     */
//   await sequelize.sync({ alter: true });
//   console.log('Models synced successfully.');
// }
// syncModels();

// 1-N: Danh mục mẹ có nhiều danh mục con
Category.hasMany(CategoryChild, { foreignKey: 'id_category_product' });
// N-1: Danh mục con chỉ có 1 danh mục mẹ
CategoryChild.belongsTo(Category, { foreignKey: 'id_category_product' });
// Product
Category.hasMany(Product, { foreignKey: 'cate_prod' });
Product.belongsTo(Category, { foreignKey: 'cate_prod' });
// QH 1-1
Product.belongsTo(CategoryChild, { foreignKey: 'cate_child_prod' });
CategoryChild.hasMany(Product, { foreignKey: 'id_category_child' });
// Brand
Brand.hasMany(Product, { foreignKey: 'brand_prod' });
Product.belongsTo(Brand, { foreignKey: 'brand_prod' });
// Image Product
Product.hasMany(ImageProd, { foreignKey: 'id_images' });
ImageProd.belongsTo(Product, { foreignKey: 'id_images' });
// Product Detail
Product.belongsTo(DetailProd, { foreignKey: 'id_detail_prod' });
// Color Product
Product.belongsToMany(Colors, { through: ColorProd, foreignKey: 'product_id' });
Colors.belongsToMany(Product, { through: ColorProd, foreignKey: 'color_id' });

module.exports = {
  CategoryChild,
  Category,
  Brand,
  DetailProd,
  Colors,
  ColorProd,
  MaterialProd,
  ImageProd,
  StyleProd,
  Product,
};
