import React from "react";

const CallToAction = () => {
  const handleClickLinkedIn = () => {
    window.location.href = "https://www.linkedin.com/in/matthew-clunie/";
  };

  const handleClickGitHub = () => {
    window.location.href = "https://github.com/matthewclunie";
  };
  return (
    <div className="flex items-center justify-between">
      <div>
        <button
          className="p-2 mr-4 text-lg transition-all rounded-md outline bg-cyan-500 outline-cyan-500 hover:outline-white"
          onClick={handleClickLinkedIn}
        >
          Linkedin
        </button>
        <button
          className="p-2 mr-4 text-lg transition-all rounded-md outline outline-cyan-500 text-cyan-500 hover:text-white"
          onClick={handleClickGitHub}
        >
          Github
        </button>
        <button
          className="p-2 text-lg transition-all rounded-md outline outline-cyan-500 text-cyan-500 hover:text-white"
          onClick={handleClickGitHub}
        >
          Resume
        </button>
      </div>
      <p className="font-medium">matthew.clunie@gmail.com</p>
    </div>
  );
};

export default CallToAction;
