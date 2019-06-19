'use strict';
export default function (sequelize, DataTypes) {
    var Review = sequelize.define('Review', {
        description: DataTypes.STRING
    }, {});
    Review.associate = function (models) {
        Review.belongsTo(models.Product);
    };
    return Review;
}