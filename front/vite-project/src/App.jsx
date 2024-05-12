import NavBar from "./components/primary/navbar/NavBar"
import Home from "./views/Home/Home";
import MisTurnos from "./views/MisTurnos/MisTurnos";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import Footer from "./components/primary/footer/Footer";
import styles from './App.module.css';


function App() {
  return (
  <div className={styles.grandContainer}>
    <NavBar />
    <div className={styles.container}>
      {/* <h1 className={styles.prueba}>Este es el componente principal de la App</h1> */}
      {/* <Home /> */}
      {/* <MisTurnos /> */}
      {/* <Register /> */}
      <Login />
    </div>
    <Footer />
  </div>
  )
}

export default App;
