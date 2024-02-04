import Header from "../Header";
import Main from "../Main"
import Footer from "../Footer";
import "./App.css";

const users = [
  {
    id: 1,
    firstName: "Sr. Lechuga",
    lastName: "Ensalada",
    age: 29
  },
  {
    id: 2,
    firstName: "Sr. Tomate",
    lastName: "Ensalada",
    age: 32
  },
  {
    id: 3,
    firstName: "Sr. Cebolla",
    lastName: "Ensalada",
    age: 36
  },
  {
    id: 4,
    firstName: "Sr. Maiz",
    lastName: "Ensalada",
    age: 17
  },
]

function App() {
  return (
    <div className="App">
      <Header />
      <Main users={users}/>
      <Footer />
    </div>
  );
}

export default App;
