const express = require('express');
const app = express();
const morgan = require("morgan");
const apiRouter = require('./routes/api');
const cors = require('cors');
// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
require('./database')
app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use('/api', apiRouter);
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});