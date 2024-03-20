const express = require('express');
const app = express();
const wellRoutes = require('./routes/well');

//swagger api docs
const apiDocs = require('./apidocs.json');
const swaggerUi = require('swagger-ui-express');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocs));

app.use('/well', wellRoutes);

module.exports = app;