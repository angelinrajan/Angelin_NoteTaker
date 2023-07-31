const express = require('express');
const fs = require('fs');
const path = require('path');
//const task = require('./db/db.json');
//const { error } = require('console');
const shortid = require('shortid')
const PORT = 3001;

const app = express();
const dbPath = path.join(__dirname, './db/db.json');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});


//   app.get('/api/notes', (req, res) => {
//     res.json(task);
//   });



//   function createNewNote(body, notesArray) {
//     const newNote = body;
//     if (!Array.isArray(notesArray))
//         notesArray = [];
    
//     if (notesArray.length === 0)
//         notesArray.push(0);

//     body.id = notesArray[0];
//     notesArray[0]++;

//     notesArray.push(newNote);
//     fs.writeFileSync(
//         path.join(__dirname, './db/db.json'),
//         JSON.stringify(notesArray, null, 2)
//     );
//     return newNote;
// }

// app.post('/api/notes', (req, res) => {
//     const newNote = createNewNote(req.body, task);
//     res.json(newNote);
// });

// Route for getting all notes
app.get('/api/notes', (req, res) => {
    fs.readFile(dbPath, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error reading notes from the database' });
      }
      const notes = JSON.parse(data);
      res.json(notes);
    });
  });

  // Route for adding a new note
app.post('/api/notes', (req, res)=> {
fs.readFile(dbPath, (err, data)=> {
    if (err) {
        console.error(err);
        return res.status(500).json({error: 'Error reading notes from the database' });
    }
    const notes = JSON.parse(data);
    const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: shortid.generate(),
    }
    notes.push(newNote);
fs.writeFile(dbPath, JSON.stringify(notes, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error writing note to the database' });
      }
      res.json(newNote);
    });
  });
});

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });


// app.post('/api/notes', (req, res) => {

//     fs.readFile('./db/db.json', function(err, data) {
//         if (err) {
//             throw err
//         };
//     let allNote = JSON.parse(data);
//         let newNote = {
//             title: req.body.title,
//             text: req.body.text,
//             id: shortid.generate()
//         }
// allNote.push(newNote);
// fs.writeFile('./db/db.json', JSON.stringify(allNote,null,2), (err)=> {
//     if (err) {
//         throw err
//     };
//     res.send('200')
// })
//     })
// });



app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});