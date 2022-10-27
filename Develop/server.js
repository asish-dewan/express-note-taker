const express = require ('express');
const path = require ('path');
const fs = require ('fs');
const util = require ('util');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

