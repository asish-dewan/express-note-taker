const html = require('express').Router();

html.get('/*', (req,res) {
    res.sendFile(path.join(__dirname, '../public/scripts/index.html'));
});
html.get('/notes', (req,res) {
    res.sendFile(path.join(__dirname, '../public/scripts/notes.html'));
});

module.exports = html;