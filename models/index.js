// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
//dont know how to fill
});

// Categories have many Products
Category.hasMany(Product, {
//dont know how to fill
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    //unique???
  }
});

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product,{
  through: {
    model: ProductTag,
    //unique???
  }
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
