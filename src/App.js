import logo from './logo.svg';
import './App.css';
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection";
import SearchArea from "./components/SearchArea";
import Veterinarians from "./components/VeterinariansCarrossel";
import VeterinariansSection from "./components/VeterinariansSection";
import TutorsSection from "./components/TutorsSection";

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <SearchArea/>
      <Veterinarians/>
      <TutorsSection/>
      <VeterinariansSection/>
      <BlogSection/>
      <Footer/>
    </div>
  );
}

export default App;
