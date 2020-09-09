import React from "react";
import axios from "axios";

const Note = ({ note, reloadNotes }) => {
    const handleDelete = () => {
        axios.post('/api/delete-note', { id: note._id}).then(reloadNotes);
    }

    return (
        <> 
          <p>{note.text}</p>
          <button onClick={handleDelete}>Delete</button>
        </>
      )
};

export default Note;