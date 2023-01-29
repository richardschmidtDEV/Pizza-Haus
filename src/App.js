import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Karte } from "./components/Skills";
import { Ueberuns } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import OnHoverScrollContainer from "./components/CostumScrollDiv";

function App() {
  return (
      <OnHoverScrollContainer>
    <div className="App">
      <NavBar />
      <Banner />
      <Karte />

      <Ueberuns />
      <Contact />
      <Footer />
    </div>
      </OnHoverScrollContainer>
  );
}

export default App;
