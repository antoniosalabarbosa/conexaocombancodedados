const obj = {
    development: {
        client: 'mysql',
        connection: {
            host:'localhost',
            user:'root',
            password:'',
            database:'knex_server'
        }
    }
}

const knex = require('knex')(obj.development);

module.exports = knex;