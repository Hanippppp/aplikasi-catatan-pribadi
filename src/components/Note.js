import React from "react";

function Note({ note, onDelete, onArchive }) {
  return (
    <li>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <button onClick={() => onDelete(note.id)}>Hapus</button>
      <button onClick={() => onArchive(note.id)}>
        {note.archived ? "Kembalikan" : "Arsipkan"}
      </button>
    </li>
  );
}

export default Note;
