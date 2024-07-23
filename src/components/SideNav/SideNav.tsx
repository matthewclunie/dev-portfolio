import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import LinkButton from "./LinkButton/LinkButton";
import NavButton from "./NavButton/NavButton";

const SideNav = () => {
  return (
    <div className="animate-fadeLeft">
      <div className="flex my-8 rotate-180 writing-vertical-lr">
        <NavButton text="Contact" />
        <NavButton text="Projects" />
        <NavButton text="Experience" />
        <NavButton text="About" />
      </div>
      <div>
        <div className="mb-4">
          <LinkButton
            icon={<Linkedin />}
            source="https://www.linkedin.com/in/matthew-clunie/"
          />
        </div>
        <LinkButton
          icon={<Github />}
          source="https://github.com/matthewclunie/"
        />
      </div>
    </div>
  );
};

export default SideNav;
