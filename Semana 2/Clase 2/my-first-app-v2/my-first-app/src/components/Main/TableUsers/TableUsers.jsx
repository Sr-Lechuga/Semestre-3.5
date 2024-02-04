import TableUsersRow from "./TableUsersRow";

const TableUsers = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <TableUsersRow key={user.id} {...user} />
        ))}
      </tbody>
    </table>
  );
};

export default TableUsers;
