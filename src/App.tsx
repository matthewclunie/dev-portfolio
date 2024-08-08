import "./App.css";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import { HeroImage } from "./components/HeroImage/HeroImage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <body className="h-full">
      <NavBar />
      <HeroImage />
      <About />
      <Experience />
    </body>
  );
}

export default App;
