import "./App.css";
import { HeroImage } from "./components/HeroImage/HeroImage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="h-screen">
      <NavBar />
      <HeroImage />
    </div>
  );
}

export default App;
