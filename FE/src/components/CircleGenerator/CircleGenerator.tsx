import { ReactElement } from "react";
import "./CircleGenerator.scss";

interface CircleGeneratorProps {
  size: "size52" | "size250" | "size200" | "size150" | "size110";
  color: "circleLightBlue" | "darkCircleLightBlue" | "innerBlue" | "white";
  children?: ReactElement;
}

const CircleGenerator = ({ size, color, children = <div /> }: CircleGeneratorProps) => {
  return <div className={`circle ${size} ${color}`}>{children}</div>;
};

export default CircleGenerator;
