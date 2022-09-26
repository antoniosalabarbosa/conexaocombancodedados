// Gerencia os recurso e quando serão utilizados
const Express = require("./model").Express;
const routes = Express.Router();

const controller = require("./controller");

routes.get("/", controller.root);
routes.get("/products", controller.products);

module.exports = routes;