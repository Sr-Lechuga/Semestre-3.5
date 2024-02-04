const TableUsersRow = ({id, firstName, lastName, age}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{age}</td>
    </tr>
  );
};

export default TableUsersRow;
