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
        {users.map(({id, firstName, lastName, age}) => (
          <TableUsersRow
            key = {id}
            id={id}
            firstName={firstName}
            lastName={lastName}
            age={age}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TableUsers;
