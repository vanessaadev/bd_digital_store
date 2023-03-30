const express = require('express');

const app = express.Router();

app.get("/Categories", (req, res) => {
    res.send("lista de categorias");
});