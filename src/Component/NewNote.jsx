import React from "react";

function NewNote({ form, onChange, onCreate }) {
  return (
    <div className="note">
      <i
        className="fa-solid fa-caret-right icon icon-new"
        onClick={onCreate}
      ></i>
      <form>
        <label htmlFor="new">New Note</label>
        <textarea
          id="new"
          name="content"
          value={form.content}
          onChange={onChange}
          spellCheck="false"
        />
      </form>
    </div>
  );
}

export default NewNote;
