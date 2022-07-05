const Sequelize = require('sequelize');

const path = 'mysql://callum:password@localhost:3306/testdb';
const sequelize = new Sequelize(path, {
    operatorsAliases: false,
    logging: false
});

let Dummy = sequelize.define('dummy', {
    description: Sequelize.STRING
});

Dummy.drop().then(() => {
    console.log('table deleted');
}).finally(() => {
    sequelize.close();
});
