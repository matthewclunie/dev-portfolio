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

  return (
    <div ref={ref} className="flex items-center m-16">
      <div
        className={`flex w-full justify-between opacity-0 ${
          onScreen ? "animate-fade-down" : ""
        } animation-fill-forwards`}
      >
        <div>
          <SectionTitle onScreen={onScreen} title="Experience" />
          <p className="text-xl">Ergonomic Group</p>
        </div>
        <div className="w-1/3">
          <SectionTitle onScreen={onScreen} title="Education" />
          <p className="text-xl">Hunter Business School</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
