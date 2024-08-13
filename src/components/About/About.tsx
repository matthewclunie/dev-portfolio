import { useEffect, useRef, useState } from "react";
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

  const ref = useRef(null);
  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setOnScreen(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // return () => {
    //   if (ref.current) {
    //     observer.unobserve(ref.current);
    //   }
    // };
  }, []);

  return (
    <div ref={ref} className="flex min-h-[500px] mx-16">
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
          <ul className="grid grid-cols-2 pl-5 text-2xl list-disc list-bullet-highlight">
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
