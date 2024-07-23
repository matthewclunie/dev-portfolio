import { FunctionComponent } from "react";

interface Props {
  icon: React.JSX.Element;
  source: string;
}

const LinkButton: FunctionComponent<Props> = ({ icon, source }) => {
  const handleClick = () => {
    window.location.href = source;
  };

  return (
    <button
      className="p-2 transition-all hover:scale-110 hover:text-cyan-500"
      onClick={handleClick}
    >
      {icon}
    </button>
  );
};

export default LinkButton;
