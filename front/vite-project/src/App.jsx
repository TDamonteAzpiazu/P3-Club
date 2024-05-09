import NavBar from "./components/primary/navbar/NavBar"
import Home from "./views/Home/Home";
import MisTurnos from "./views/MisTurnos/MisTurnos";
import styles from './App.module.css';


function App() {
  return (
  <>
    <NavBar />
    {/* <h1 className={styles.prueba}>Este es el componente principal de la App</h1> */}
    <Home />
    <MisTurnos />
  </>
  )
}

export default App;
