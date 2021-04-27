// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongToMany(Tag, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongToMany(Product, {
  foreignKey: 'tag_id',
  onDelete: 'CASCADE',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
