import { FunctionComponent } from "react";

interface Props {
  title: string;
  onScreen: boolean;
}

const SectionTitle: FunctionComponent<Props> = ({ title, onScreen }) => {
  return (
    <h2
      className={`mb-6 text-5xl ${
        onScreen ? "animate-fade-color animation-fill-forwards delay-700" : ""
      }`}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
