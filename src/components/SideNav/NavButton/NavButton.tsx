import { FunctionComponent } from "react";

interface Props {
  text: string;
}

const NavButton: FunctionComponent<Props> = ({ text }) => {
  return <button className="py-4">{text}</button>;
};

export default NavButton;
