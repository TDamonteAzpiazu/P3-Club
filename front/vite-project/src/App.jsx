import NavBar from "./components/primary/navbar/NavBar"
import Home from "./views/Home/Home";
import MisTurnos from "./views/MisTurnos/MisTurnos";
import Footer from "./components/primary/footer/Footer";
import styles from './App.module.css';


function App() {
  return (
  <div className={styles.grandContainer}>
    <NavBar />
    <div className={styles.container}>
      {/* <h1 className={styles.prueba}>Este es el componente principal de la App</h1> */}
      <Home />
      {/* <MisTurnos /> */}
    </div>
    <Footer />
  </div>
  )
}

export default App;
