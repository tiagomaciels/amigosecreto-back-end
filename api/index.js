const express = require("express");
const routes = require("./routes");
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors({origin: 'http://localhost:4200'}));

routes(app);

app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`));

module.exports = app;
