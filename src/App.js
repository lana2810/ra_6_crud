import "./App.css";
import React, { useState, useEffect } from "react";
import NewNote from "./Component/NewNote";
import NoteList from "./Component/NoteList";
import API from "./api";

function App() {
  const initialStateForm = {
    content: "",
  };

  const [form, setForm] = useState(initialStateForm);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  function loadData() {
    setLoading(true);
    API.getNotes().then((response) => {
      setNotes(response);
      setLoading(false);
    });
  }
  useEffect(() => {
    loadData();
  }, []);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  const handleCreate = async (e) => {
    e.preventDefault();
    await API.createNote(form.content);
    setForm(initialStateForm);
    loadData();
  };

  const handleDelete = async (id) => {
    API.removeNote(id);
    setNotes((prevNotes) => prevNotes.filter((it) => it.id !== id));
  };

  const handleClick = () => {
    loadData();
  };
  return (
    <div className="container">
      <span className="title">Notes</span>
      <i
        className="fa-solid fa-arrows-rotate icon icon-update"
        onClick={handleClick}
      />
      {loading ? (
        <h3>Загрузка</h3>
      ) : (
        <NoteList items={notes} onDelete={handleDelete} />
      )}
      <NewNote form={form} onChange={handleChange} onCreate={handleCreate} />
    </div>
  );
}

export default App;
