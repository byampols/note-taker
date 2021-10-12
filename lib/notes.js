const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return note;
}

function deleteById(id, notesArray) {
    let result = notesArray.filter(note => note.id !== id);
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify(result, null, 2)
    );
    return result;
};

module.exports = {
  createNewNote,
  deleteById
};