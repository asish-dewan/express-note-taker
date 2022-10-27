const express = require ('express');

// Import our modular routers for /api and /html

const apiRoute = require ('./api-routes');
const htmlRoute = require ('./html-routes');

const app = express ();

app.use('/api-routes', apiRoute);
app.use('/html-routes', htmlRoute);

module.exports = app;
