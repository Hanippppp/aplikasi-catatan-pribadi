import React from "react";
import Note from "./Note";

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <ul>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ))}
    </ul>
  );
}

export default NoteList;
