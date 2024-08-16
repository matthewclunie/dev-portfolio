import React, { useEffect, useRef, useState } from "react";
import eventEcho from "../../assets/eventecho_screenshot.png";
import SectionTitle from "../SectionTitle.tsx/SectionTitle";
import { ExternalLink, Github } from "lucide-react";
import LinkButton from "../NavBar/LinkButton/LinkButton";

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

  const handleClick = () => {
    window.location.href = "https://event-echo.vercel.app/";
  };

  return (
    <div
      ref={ref}
      className={`flex items-center justify-center min-h-screen opacity-0 animation-fill-forwards ${
        onScreen ? "animate-fade-down" : "animate-fade-up"
      }`}
    >
      <div className="w-1/2 m-auto">
        <SectionTitle onScreen={onScreen} title="Projects" />
        <button onClick={handleClick}>
          <img
            className="mb-4 transition-all rounded-lg hover:brightness-125"
            src={eventEcho}
          />
        </button>

        <h4 className="mb-1 text-2xl font-bold">EventEcho</h4>
        <p>
          Social media tracker application that monitors and analyzes YouTube
          comment data by groups of videos. Allows users to create an account,
          track a series of YouTube videos and analyze comment data from the
          videos selected. Users can like and favorite series by other creators,
          subscribe to creators as well as create their own data anlysis.
        </p>
        <div className="flex justify-end">
          <LinkButton
            icon={<Github />}
            source="https://github.com/matthewclunie/event-echo"
          />
          <LinkButton
            icon={<ExternalLink />}
            source="https://event-echo.vercel.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
