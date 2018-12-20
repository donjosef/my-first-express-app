const express = require('express');
const app = express();

const homeRoute = require('./routes/home');

app.use(homeRoute);

app.listen(3000, () => console.log('Server listening on port 3000'));