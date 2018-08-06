'use strict';

export default function (sequelize, DataTypes) {
    var Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        brand: DataTypes.STRING,
        price: DataTypes.DECIMAL
    }, {});
    Product.associate = function (models) {
        Product.hasMany(models.Review);
    };
    return Product;
}