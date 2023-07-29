const express = require('express');
const fs = require('fs');
const path = require('path');
const task = require('./db/db.json');

const PORT = 3001;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

app.get('/api/notes', (req, res) => res.json(task));

app.post('/api/notes', (req, res) => {
    const newTask = createNewNote(req.body, task);
    res.json(newTask);
});



app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});