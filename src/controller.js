// O recurso que realiza algo
const path = require("./model").path;
const knex = require("./knexfile");

module.exports = {
    root: async (req, res)=> {
        return res.sendFile(path.join(__dirname, 'pages', 'index.html'));
    },

    products: async (req, res)=> {
        const result = await knex('produtos');
        // console.log(result[0].id_produto);
        return res.json(result);
        
        //return res.sendFile(path.join(__dirname, 'pages', 'products.html'));
    }
};