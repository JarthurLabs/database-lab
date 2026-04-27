import { useState } from "react";
import TableRow from "./components/TableRow";

export default function App() {
  const [records, setRecords] = useState([]);
  const [input, setInput] = useState({ name: "", age: "" });

  const addRecord = () => {
    if (input.name && input.age) {
      setRecords([...records, input]);
      setInput({ name: "", age: "" });
    }
  };

  const deleteRecord = (index) => {
    setRecords(records.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Database Lab Engine (Mock)</h1>

      <div className="form">
        <input
          placeholder="Name"
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
        <input
          placeholder="Age"
          value={input.age}
          onChange={(e) => setInput({ ...input, age: e.target.value })}
        />
        <button onClick={addRecord}>Insert</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((rec, i) => (
            <TableRow key={i} rec={rec} onDelete={() => deleteRecord(i)} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
