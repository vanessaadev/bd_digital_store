const express = require('express');

const categoryRouter = require('./resources/category/routes');

const app = express();

app.use(categoryRouter);

app.listen(8000, () => {
    console.log('-----------');
    console.log('---Tá on---');
    console.log('-----------');
});
