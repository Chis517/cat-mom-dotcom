var Sequelize = require('sequelize');
var bcrypt = require('bcrypt');


const sequelize = new Sequelize('ourDatabase', 'root', 'password', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});

// set up User Table and fields
var User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
// Encrypts password
User.beforeCreate((user, options) => {
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(user.password, salt);

});

// Checks for valid password
User.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

// Create all the defined tables in the specified database.

sequelize.sync()
.then(() => console.log('users table has been successfully created, if one doesnt exist'))
.catch(error => console.log('This error occured', error));

// Export user model for use in other files
module.exports = User;