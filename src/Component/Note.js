import React from "react";

function Note({ id, content, onDelete }) {
  return (
    <div className="note">
      {content}
      <i
        className="fa-solid fa-xmark icon icon-delete"
        onClick={() => onDelete(id)}
      />
    </div>
  );
}

export default Note;
