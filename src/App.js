import React, { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Search from "./components/Search";

const initialNotes = [
  {
    id: +new Date(),
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+...",
    archived: false,
    createdAt: "2022-04-14T04:27:34.572Z",
  },
  // Tambahkan catatan lain jika diperlukan
];

function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [searchQuery, setSearchQuery] = useState("");
  const [showArchived, setShowArchived] = useState(false);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const archiveNote = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const notesToShow = showArchived
    ? filteredNotes.filter((note) => note.archived)
    : filteredNotes.filter((note) => !note.archived);

  return (
    <div className="App">
      <h1>Aplikasi Catatan Pribadi</h1>
      <Search onSearchChange={handleSearchChange} />
      <NoteForm addNote={addNote} />
      <button onClick={() => setShowArchived(!showArchived)}>
        {showArchived ? "Tampilkan Catatan Aktif" : "Tampilkan Catatan Arsip"}
      </button>
      <NoteList
        notes={notesToShow}
        onDelete={deleteNote}
        onArchive={archiveNote}
      />
      {notes.length === 0 && <p>Tidak ada catatan</p>}
    </div>
  );
}

export default App;
