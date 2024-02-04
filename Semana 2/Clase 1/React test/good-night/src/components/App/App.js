import Header from "../Header"
import UserCard from "../UserCard";
import './App.css';

function App() {
  return (
    <div className="App">
      <UserCard nombre="Sr. Lechuga" edad="42"/>
      <UserCard nombre="Sr. Tomate" edad="24"/>
      <UserCard nombre="Sr. Cebolla" edad="33"/>
      <UserCard nombre="Sr. Sandia" edad="12"/>
      {/* <Header/> */}
    </div>
  );
}

export default App;
