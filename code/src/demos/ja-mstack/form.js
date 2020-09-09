import React, { useState } from "react";
import axios from "axios";

const Form = ({reloadNotes}) => {
  const [text, setText] = useState('');
  const handleSubmit = async event => {
    event.preventDefault();

    if(text === '') return;

    await axios.post('/api/create-note', { text });

    setText('');
    reloadNotes();
  } 

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <label htmlFor="textarea">Add notes
        <textarea
          id="textarea"
          value={text}
          onChange={event => setText(event.target.value)}
        ></textarea>
      </label>
      <button className="save-button" type="submit">Save note</button>
    </form>
  );
};

export default Form;