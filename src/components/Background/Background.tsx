import { PropsWithChildren } from "react";
import CircleGenerator from "../CircleGenerator/CircleGenerator";
import "./Background.scss";

interface BackgroundProps extends PropsWithChildren {
  imgSrc: string;
}

const Background = ({ children, imgSrc }: BackgroundProps) => {
  console.log(imgSrc);
  return (
    <div className="background-wrapper">
      <div className="background-top-area">
        <div className="background-circle-item">
          <CircleGenerator size="size250" color="circleLightBlue">
            <CircleGenerator size="size200" color="innerBlue">
              <CircleGenerator size="size150" color="white">
                <img className="background-logo" src={imgSrc} alt="logo" />
              </CircleGenerator>
            </CircleGenerator>
          </CircleGenerator>
        </div>
        <div className="background-circle-item">
          <CircleGenerator size="size150" color="circleLightBlue" />
        </div>
        <div className="background-circle-item">
          <CircleGenerator size="size110" color="circleLightBlue" />
        </div>
        <div className="background-circle-item">
          <CircleGenerator size="size52" color="circleLightBlue" />
        </div>
        <div className="background-circle-item">
          <CircleGenerator size="size250" color="circleLightBlue">
            <CircleGenerator size="size110" color="innerBlue" />
          </CircleGenerator>
        </div>
        <div className="background-circle-item">
          <CircleGenerator size="size52" color="circleLightBlue" />
        </div>
      </div>
      <div className="children-container">{children}</div>
    </div>
  );
};

export default Background;
