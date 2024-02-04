const Main = ({users}) => {
  return (
      <main>
          <h1>Lista de usuarios</h1>
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
                {users.map(({id,firstName,lastName,age}) => (
                  <tr>
                    <td>{id}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{age}</td>
                  </tr>
                ))}
              </tbody>
          </table>
      </main>
  );
};

export default Main;
