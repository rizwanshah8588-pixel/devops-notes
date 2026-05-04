import { useState, useEffect } from "react";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/notes")
      .then(res => res.json())
      .then(data => setNotes(data));
  }, []);

  const addNote = () => {
    fetch("http://backend:5000/notes", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ text })
    }).then(() => {
      setNotes([...notes, { text }]);
      setText("");
    });
  };

  return (
    <div>
      <h1>DevOps Notes</h1>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addNote}>Add</button>

      <ul>
        {notes.map((n, i) => <li key={i}>{n.text}</li>)}
      </ul>
    </div>
  );
}