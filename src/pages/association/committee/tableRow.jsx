import "./style.css";

export default function TableRow({ no, name, affiliation, email, position }) {
  return (
    <tr>
      <th scope="row">{no}</th>
      <td>{name}</td>
      <td>{affiliation}</td>
      <td>{email}</td>
      <td>{position}</td>
    </tr>
  );
}
