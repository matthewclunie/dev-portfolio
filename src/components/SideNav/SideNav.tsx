// import LinkButton from "./LinkButton/LinkButton";
import NavButton from "./NavButton/NavButton";

const SideNav = () => {
  return (
    <div className="flex pb-8 rotate-180 writing-vertical-lr">
      <NavButton text="Contact" />
      <NavButton text="Projects" />
      <NavButton text="Experience" />
      <NavButton text="About" />
      {/* <LinkButton
        text="LinkedIn"
        source="https://www.linkedin.com/in/matthew-clunie/"
      />
      <LinkButton text="Github" source="https://github.com/matthewclunie/" /> */}
    </div>
  );
};

export default SideNav;
