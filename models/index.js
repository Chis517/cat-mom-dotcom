const User = require('./User');
const Search = require('./Search');
const CatPics = require('./CatPics');

Search.hasMany(CatPics, {
    foreignKey: '',
});

CatPics.belongsTo(Search, {
    foreignKey: '',
});

module.exports = { User, Search, CatPics };