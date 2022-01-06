const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CatPics extends Model {}

CatPics.init(
    {
        
    }
)

module.exports = CatPics;