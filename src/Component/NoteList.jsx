import React from "react";
import Note from "./Note";
function NoteList({ items, onDelete }) {
  return (
    <div className="note-list">
      {items.map((item) => (
        <Note key={item.id} {...item} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default NoteList;
