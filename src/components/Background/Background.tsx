import { PropsWithChildren } from "react";
import "./Background.scss";

const Background = ({ children }: PropsWithChildren) => {
  return (
    <div className="background-wrapper">
      <div className="background-purple-area" />
      <div className="children-container">{children}</div>
    </div>
  );
};

export default Background;
