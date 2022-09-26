const Express = require("./src/model").Express;
const app = require("./src/model").app;
const routes = require("./src/routes");

app.use(Express.json())
app.use(routes);

app.listen(3001);