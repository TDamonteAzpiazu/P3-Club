import NavBar from "./components/primary/navbar/NavBar"
import Home from "./views/Home/Home";
import MisTurnos from "./views/MisTurnos/MisTurnos";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import Profile from "./views/Profile/Profile";
import AboutUs from "./views/AboutUs/About";
import Error from "./views/Error/Error";
import Footer from "./components/primary/footer/Footer";
import styles from './App.module.css';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
  <div className={styles.grandContainer}>
    <NavBar />
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myAppointments" element={<MisTurnos />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
    <Footer />
  </div>
  )
}

export default App;
