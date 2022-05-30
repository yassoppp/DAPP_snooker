import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Collection from "./components/Cartes/CarteForm";
import AboutUs from "./components/AboutUs/AboutUs";
import Intro from "./components/Intro/Intro";
import Fin from "./components/Fin/Fin";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Collection />
      <Intro />
      <AboutUs />
      <Fin />
    </div>
  );
}

export default App;
