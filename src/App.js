import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import CarteForm from "./components/CarteForm";
import AboutUs from "./components/AboutUs/AboutUs";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <CarteForm />
    </div>
  );
}

export default App;
