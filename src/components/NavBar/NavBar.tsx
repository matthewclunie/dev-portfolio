import { FileText, Github, Linkedin } from "lucide-react";
import NavButton from "./NavButton/NavButton";
import LinkButton from "./LinkButton/LinkButton";
import ThemeButton from "./ThemeButton/ThemeButton";

const TopNav = () => {
  return (
    <div className="flex items-center justify-between animate-fade-down">
      <div>
        <h3 className="text-3xl animate-fade-color animation-fill-forwards delay-1400">
          Matthew Clunie | Software Developer
        </h3>
        <p>Software Developer experienced in React.</p>
      </div>
      <div className="flex">
        <NavButton text="About" />
        <NavButton text="Experience" />
        <NavButton text="Projects" />
        <NavButton text="Contact" />
        <div className="m-2 border" />
        <div className="flex">
          <LinkButton
            icon={<Linkedin />}
            source="https://www.linkedin.com/in/matthew-clunie/"
          />
          <LinkButton
            icon={<Github />}
            source="https://github.com/matthewclunie/"
          />
        </div>
        <LinkButton
          icon={<FileText />}
          source="https://github.com/matthewclunie/"
        />
        <div className="m-2 border" />
        <ThemeButton />
      </div>
    </div>
  );
};

export default TopNav;
