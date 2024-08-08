import SectionTitle from "../SectionTitle.tsx/SectionTitle";

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

  return (
    <div className="flex justify-between m-16">
      <div className="w-1/2">
        <SectionTitle title="About Me" />
        <p className="text-xl">
          As a dedicated React Developer with two years of experience, I
          specialize in creating responsive and scalable web applications, with
          a strong proficiency in TypeScript. My recent role at Ergonomic Group
          in Jericho involved maintaining a high-impact software solution for a
          Fortune 500 client, managing assets valued over $40 million.
        </p>
      </div>
      <div className="w-1/3">
        <SectionTitle title="Skills" />
        <ul className="grid grid-cols-2 pl-5 text-xl list-disc color-cyan-4 list-bullet-highlight">
          {skills.map((skill) => {
            return <li className="mx-2 mb-2">{skill}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default About;
