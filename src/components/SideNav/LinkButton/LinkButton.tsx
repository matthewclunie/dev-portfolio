import { FunctionComponent } from "react";

interface Props {
  text: string;
  source: string;
}

const LinkButton: FunctionComponent<Props> = ({ text, source }) => {
  return <link href={source}>{text}</link>;
};

export default LinkButton;
