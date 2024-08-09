import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle.tsx/SectionTitle";

// interface Props {
//   onScreen: boolean;
// }

const About = () => {
  const skills = [
    "React",
    "TypeScript",
    "MaterialUI",
    "NextJS",
    "Jest",
    "Tailwind",
    "Git",
    "WordPress",
  ];

  const [onScreen, setOnScreen] = useState(false);

  const handleScroll = () => {
    const element = document.querySelector(".animate-fade-down");

    const rect = element && element.getBoundingClientRect();
    rect && rect.bottom < window.innerHeight && rect.bottom >= -200
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
    <div className="flex min-h-[400px] m-16">
      <div
        className={`flex justify-between opacity-0 ${
          onScreen ? "animate-fade-down" : "animate-fade-up"
        } animation-fill-forwards`}
      >
        <div className="w-1/2">
          <SectionTitle onScreen={onScreen} title="About Me" />
          <h4 className="text-2xl">
            As a dedicated React Developer with two years of experience, I
            specialize in creating responsive and scalable web applications,
            with a strong proficiency in TypeScript. My recent role at Ergonomic
            Group in Jericho involved maintaining a high-impact software
            solution for a Fortune 500 client, managing assets valued over $40
            million.
          </h4>
        </div>
        <div className="w-1/3">
          <SectionTitle onScreen={onScreen} title="Skills" />
          <ul className="grid grid-cols-2 pl-5 text-2xl list-disc color-cyan-4 list-bullet-highlight">
            {skills.map((skill) => {
              return <li className="mx-2 mb-2">{skill}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
