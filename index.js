const express = require ("express");
const app = express();
const connection = require ("./src/database/database");
const bodyParser = require('body-parser');
const routes = require ("./src/routes");
const cors = require("cors");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

connection
    .authenticate().then(() => {
    console.log("Conexão feita com o banco de dados!")
}).catch((err) => {
    console.log(err);
})

app.use(routes);

app.listen( 8090, () => {
    console.log("api rodando");
})