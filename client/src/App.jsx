import { useEffect, useState } from "react";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  const API_URL = "http://localhost:5000";

  useEffect(() => {
    fetch(`${API_URL}/notes`)
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((err) => console.log(err));
  }, []);

  const addNote = async () => {
    if (!text.trim()) return;

    const newNote = { text };

    await fetch(`${API_URL}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    });

    setNotes([...notes, newNote]);
    setText("");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.badge}>Docker + React + Node + CI/CD</div>

        <h1 style={styles.title}>DevOps Notes</h1>

        <p style={styles.subtitle}>
          A containerized full-stack app built with Docker Compose and GitHub Actions.
        </p>

        <div style={styles.inputBox}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addNote()}
            placeholder="Write your deployment note..."
            style={styles.input}
          />

          <button onClick={addNote} style={styles.button}>
            Add Note
          </button>
        </div>

        <div style={styles.stats}>
          <div style={styles.statBox}>
            <strong>{notes.length}</strong>
            <span>Total Notes</span>
          </div>

          <div style={styles.statBox}>
            <strong>2</strong>
            <span>Containers</span>
          </div>

          <div style={styles.statBox}>
            <strong>CI</strong>
            <span>GitHub Actions</span>
          </div>
        </div>

        <div style={styles.notesArea}>
          {notes.length === 0 ? (
            <p style={styles.empty}>No notes yet. Add your first DevOps note.</p>
          ) : (
            notes.map((note, index) => (
              <div key={index} style={styles.note}>
                <span style={styles.noteIcon}>⚡</span>
                <p>{note.text}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #020617 0%, #0f172a 45%, #111827 100%)",
    color: "#e5e7eb",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
  },
  card: {
    width: "100%",
    maxWidth: "850px",
    background: "rgba(15, 23, 42, 0.9)",
    border: "1px solid rgba(34, 211, 238, 0.3)",
    borderRadius: "24px",
    padding: "35px",
    boxShadow: "0 0 40px rgba(34, 211, 238, 0.15)",
    textAlign: "center",
  },
  badge: {
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: "999px",
    background: "rgba(34, 211, 238, 0.1)",
    border: "1px solid rgba(34, 211, 238, 0.4)",
    color: "#67e8f9",
    fontSize: "14px",
    marginBottom: "15px",
  },
  title: {
    fontSize: "56px",
    margin: "10px 0",
    color: "#ffffff",
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: "18px",
    marginBottom: "30px",
  },
  inputBox: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  input: {
    width: "350px",
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid #334155",
    background: "#020617",
    color: "#e5e7eb",
    outline: "none",
    fontSize: "16px",
  },
  button: {
    padding: "14px 22px",
    borderRadius: "12px",
    border: "none",
    background: "#06b6d4",
    color: "#001018",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "16px",
  },
  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "15px",
    marginTop: "30px",
  },
  statBox: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "18px",
  },
  notesArea: {
    marginTop: "30px",
    textAlign: "left",
  },
  empty: {
    textAlign: "center",
    color: "#64748b",
  },
  note: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "14px",
    padding: "14px 18px",
    marginBottom: "12px",
  },
  noteIcon: {
    color: "#22d3ee",
  },
};
     