import { FunctionComponent } from "react";

interface Props {
  title: string;
}

const SectionTitle: FunctionComponent<Props> = ({ title }) => {
  return <h2 className="mb-6 text-5xl">{title}</h2>;
};

export default SectionTitle;
