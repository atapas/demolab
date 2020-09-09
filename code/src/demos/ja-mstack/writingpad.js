import React, { useEffect, useState } from "react";
import axios from "axios";
import Note from './note';
import Form from './form';

export default () => {
  const [status, setStatus] = useState("loading");
  const [notes, setNotes] = useState(null);
  const reloadNotes = () => setStatus('loading');

  useEffect(() => {
    let canceled = false;
    if (status != "loading") return;
    axios("/api/get-all-notes").then(result => {
      if (canceled === true) return;
      if (result.status != 200) {
        console.error("Error loading notes");
        console.error(result);
        return;
      }
      setNotes(result.data.notes);
      setStatus("loaded");
    });
    return () => {
      canceled = true;
    };
  }, [status]);

  return (
    <main>
      <h1>The Writing Pad</h1>
      <Form reloadNotes={reloadNotes}/>
      {notes ? (
        <ul>
          {notes.map(note => (
            <li key={note._id}>
              <Note note={note} reloadNotes={reloadNotes}/>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading notes...</p>
      )}
    </main>
  );
};