import TableUsers from "./TableUsers";

const Main = ({users}) => {
  return(
    <main>
      <h1>Lista de usuarios</h1>
      <TableUsers users={users}/>
    </main>
  );
};

export default Main;
