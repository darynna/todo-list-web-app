import { Paragraph } from "./EmptyPageComponent.styled";

const EmptyPageComponent = ({text}) => {

  return (
    <Paragraph>
      {text}
    </Paragraph>
  );
};

export default EmptyPageComponent;