import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import { HeroImage } from "./components/HeroImage/HeroImage";
import NavBar from "./components/NavBar/NavBar";
import ProjectList from "./components/ProjectList/ProjectList";

function App() {
  // const [onScreen, setOnScreen] = useState(false);

  // const handleScroll = () => {
  //   const elements = document.querySelectorAll(".animate-fade-down");
  //   elements.forEach((element) => {
  //     const rect = element && element.getBoundingClientRect();
  //     rect && rect.top < window.innerHeight && rect.bottom >= 0
  //       ? setOnScreen(true)
  //       : setOnScreen(false);
  //   });
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll();

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <html>
      <body className="text-white bg-backgroundBlue">
        <NavBar />
        <HeroImage />
        <About />
        <Experience />
        <ProjectList />
      </body>
    </html>
  );
}

export default App;
