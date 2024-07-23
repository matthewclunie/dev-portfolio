import { FunctionComponent } from "react";

interface Props {
  icon: React.JSX.Element;
  source: string;
  className?: string;
}

const LinkButton: FunctionComponent<Props> = ({ icon, source, className }) => {
  const handleClick = () => {
    window.location.href = source;
  };

  return (
    <button className={className} onClick={handleClick}>
      {icon}
    </button>
  );
};

export default LinkButton;
