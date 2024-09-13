import React, { useState } from "react";

function NoteForm({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      addNote({
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date().toISOString(),
      });
      setTitle("");
      setBody("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Judul Catatan"
        maxLength={50}
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Isi Catatan"
      />
      <button type="submit">Tambah Catatan</button>
    </form>
  );
}

export default NoteForm;
