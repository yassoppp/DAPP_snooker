import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import ActionAreaCard from "./components/CarteForm";
import AboutUs from "./components/AboutUs/AboutUs";
import Intro from "./components/Intro/Intro";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <ActionAreaCard />
      <Intro />

      <AboutUs />
    </div>
  );
}

export default App;
