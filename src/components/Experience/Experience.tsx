import { useEffect, useRef, useState } from "react";
import SectionTitle from "../SectionTitle.tsx/SectionTitle";

// interface Props {
//   onScreen: boolean;
// }

const Experience = () => {
  const [onScreen, setOnScreen] = useState(false);
  const ref = useRef(null);

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
  }, []);

  const workPoints = [
    "Played a pivotal role in maintaining a critical software solution adopted by a Fortune 500 company, overseeing assets exceeding $40 million.",
    "Proficient in programming primarily using React, JavaScript/TypeScript, Redux, HTML, and CSS.",
    "Unit testing with Jest and React Testing Library to ensure the reliability of the application.",
    "Designed and implemented dashboards and components, using MaterialUI, enhancing user experience for both clients and administrators.",
  ];

  const schoolPoints = [
    "Hunter Business School Presidents Award.",
    "Client-side programming in HTML, CSS and JavaScript",
    "Coding using React, TypeScript, Python and PHP, encompassing e-Commece, content management, architecture and security.",
  ];

  return (
    <div
      ref={ref}
      className={`flex items-center justify-center min-h-[500px] opacity-0 ${
        onScreen ? "animate-fade-down" : "animate-fade-up"
      } animation-fill-forwards`}
    >
      <div className="flex w-3/4 mx-auto">
        <div className="mr-16">
          <SectionTitle onScreen={onScreen} title="Experience" />
          <div className="flex">
            <h4 className="mr-4 text-2xl font-bold">Ergonomic Group</h4>
            <div>
              <ul className="pl-5 text-xl list-disc list-bullet-highlight">
                {workPoints.map((workPoint) => {
                  return (
                    <li className="mx-2 mb-6">
                      <p>{workPoint}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <SectionTitle onScreen={onScreen} title="Education" />
          <div className="flex">
            <h4 className="mr-4 text-2xl font-bold">Hunter Business School</h4>
            <div>
              <ul className="pl-5 text-xl list-disc list-bullet-highlight">
                {schoolPoints.map((schoolPoint) => {
                  return (
                    <li className="mx-2 mb-6">
                      <p>{schoolPoint}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
