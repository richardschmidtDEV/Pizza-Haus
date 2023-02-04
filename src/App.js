import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Karte } from "./components/Skills";
import { Ueberuns } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (

    <div className="App">
      <NavBar />
      <Banner />
      <Karte />

      <Ueberuns />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
