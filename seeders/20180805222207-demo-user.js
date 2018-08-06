'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            name: 'Raman',
            surname: 'Nasovich',
            email: 'romanmail.by@gmail.com',
            login: 'test1',
            password: '12345678',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'Ivan',
            surname: 'Ivanov',
            email: 'ivan@test.by',
            login: 'test2',
            password: '87654321',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'Petr',
            surname: 'Petrov',
            email: 'petr@test.uk',
            login: 'test3',
            password: '11111111',
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};