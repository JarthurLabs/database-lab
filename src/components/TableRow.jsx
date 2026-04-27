export default function TableRow({ rec, onDelete }) {
  return (
    <tr>
      <td>{rec.name}</td>
      <td>{rec.age}</td>
      <td>
        <button onClick={onDelete}>Delete</button>
      </td>
    </tr>
  );
}
