import { Moon } from "lucide-react";

const TopNav = () => {
  return (
    <div className="flex justify-between animate-fadeDown">
      <div>
        <h1 className="text-3xl">Matthew Clunie | Software Developer</h1>
        <p>Brief sentence about myself</p>
      </div>
      <button>
        <Moon />
      </button>
    </div>
  );
};

export default TopNav;
