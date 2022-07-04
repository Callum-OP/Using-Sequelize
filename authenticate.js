//load the Sequelize module.
const Sequelize = require('sequelize');

//MySQL connection path
const path = 'mysql://user12:12user@localhost:3306/testdb';

//instantiate Sequelize
const sequelize = new Sequelize(path, { operatorsAliases: false });

//tests the connection by trying to authenticate to the database
sequelize.authenticate().then(() => {
  console.log('Connection established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
}).finally(() => {
  sequelize.close();
});