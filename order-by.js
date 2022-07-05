const Sequelize = require('sequelize');
const path = 'mysql://callum:password@localhost:3306/testdb';
const sequelize = new Sequelize(path, {
    operatorsAliases: false
});

let Note = sequelize.define('notes', {
    description: Sequelize.STRING
});

async function getRows() {

    let notes = await Note.findAll({
        order: [['description', 'DESC']],
        attributes: ['id', 'description'], raw: true
    })

    console.log(notes);

    sequelize.close();
}

getRows();