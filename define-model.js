const Sequelize = require('sequelize');

const path = 'mysql://user12:12user@localhost:3306/mydb';
const sequelize = new Sequelize(path, {
    operatorsAliases: false
});

//new model Dummy is created
let Dummy = sequelize.define('dummy', {
    description: Sequelize.STRING
});

//syncs the model to the database
Dummy.sync().then(() => {
    console.log('New table created');
}).finally(() => {
    sequelize.close();
})