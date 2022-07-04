const Sequelize = require('sequelize');

const path = 'mysql://user12:12user@localhost:3000/mydb';
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