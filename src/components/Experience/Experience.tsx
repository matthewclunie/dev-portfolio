import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle.tsx/SectionTitle";

// interface Props {
//   onScreen: boolean;
// }

const Experience = () => {
  const [onScreen, setOnScreen] = useState(false);

  const handleScroll = () => {
    const element = document.querySelector(".animate-fade-down");

    const rect = element && element.getBoundingClientRect();
    rect && rect.top < window.innerHeight && rect.bottom >= -600
      ? setOnScreen(false)
      : setOnScreen(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex items-center m-16">
      <div
        className={`flex w-full justify-between opacity-0 ${
          onScreen ? "animate-fade-down" : ""
        } animation-fill-forwards`}
      >
        <div>
          <SectionTitle onScreen={onScreen} title="Experience" />
          <p className="text-xl">Ergonomic Group</p>
        </div>
        <div>
          <SectionTitle onScreen={onScreen} title="Education" />
          <p className="text-xl">Hunter Business School</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
