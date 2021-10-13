const router = require('express').Router();

const uniqid = require('uniqid');

const { createNewNote, deleteById } = require('../../lib/notes');
let notesdb = require('../../data/db.json');

router.get('/notes', (req, res) => {
    let results = notesdb;
    res.json(results);
});

router.post('/notes', (req, res) => {
    //set a unique id using uniqid
    req.body.id = uniqid();
    const note = createNewNote(req.body, notesdb);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    //create a new notesdb array by removing the note with the id targeted for deletion
    notesdb = deleteById(req.params.id, notesdb);
    res.json(notesdb);
});
  

module.exports = router;