import { FunctionComponent } from "react";

interface Props {
  text: string;
}

const NavButton: FunctionComponent<Props> = ({ text }) => {
  return (
    <button className="p-4 duration-500 transition-color hover:text-cyan-500 hover:scale-110">
      {text}
    </button>
  );
};

export default NavButton;
