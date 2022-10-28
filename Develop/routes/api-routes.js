const api = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../helpers/fsUtils');

// GET Route for retrieving API

api.get('/', (req, res) => {
    readFromFile ('./db/db.json'.then (data) => res.json (JSON.parse(data)));
});

// POST Route for API

api.post('/', (req, res) => {
    console.log (req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuidv4()
        };
    
        readAndAppend(newNote, './db/db.json');
        res.json (`Note added successfully 🚀`);
    }
    else {
        res.error ('Error in adding the Note');
    }
    });

    module.exports = api;