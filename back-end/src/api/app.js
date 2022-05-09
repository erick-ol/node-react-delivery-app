const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const middlewares = require('./middlewares');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/login', routes.loginRouter);
app.use('/register', routes.registerRouter);
app.use('/customer/products', routes.productRouter);
app.use('/customer/orders/', routes.saleProductRouter);
app.use('/images', routes.imageRouter);

app.use(middlewares.joiError);
app.use(middlewares.domainError);
// app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;