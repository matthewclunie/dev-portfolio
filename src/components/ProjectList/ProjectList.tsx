import React, { useEffect, useRef, useState } from "react";
import eventEcho from "../../assets/eventecho_screenshot.png";
import SectionTitle from "../SectionTitle.tsx/SectionTitle";

const ProjectList = () => {
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

  const projectPoints = [
    "Social media tracker application that monitors and analyzes YouTube comment data by groups of videos.",
    "Allows users to create an account, track a series of YouTube videos and analyze comment data from the videos selected.",
    "Users can like and favorite series by other creators, subscribe to creators as well as create their own data analysis.",
  ];

  return (
    <div
      ref={ref}
      className={`mx-16 grid content-center min-h-screen place-items-center opacity-0 animation-fill-forwards ${
        onScreen ? "animate-fade-down" : "animate-fade-up"
      }`}
    >
      <div>
        <SectionTitle onScreen={onScreen} title="Projects" />
        <div className="flex justify-between">
          <img className="w-1/2 rounded-lg" src={eventEcho} />
          <div className="p-4 rounded-lg bg-blue-950 w-[350px]">
            <ul className="pl-5 list-disc list-bullet-highlight">
              {projectPoints.map((projectPoint) => {
                return (
                  <li className="mx-2 mb-6">
                    <p>{projectPoint}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
