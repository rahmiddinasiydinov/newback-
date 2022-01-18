const express = require('express');
const app = express();
const Routes = require('./src/router')
const port = 5001;
app.use(express.json());
app.use(Routes)

app.listen(port, console.log(port));