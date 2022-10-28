const express = require ('express');
const path = require ('path');
const fs = require ('fs');
const util = require ('util');
const api = require('./routes/index');


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use('/api', api);

app.use(express.static('public'));

app.listen(PORT, () => 
console.log(`App listening at http://localhost:${PORT} 🚀 `));