import { PropsWithChildren } from "react";

import Box from "@mui/material/Box";
import CircleGenerator from "../CircleGenerator/CircleGenerator";
import "./Background.scss";

interface BackgroundProps extends PropsWithChildren {
  imgSrc: string;
}

const Background = ({ children, imgSrc }: BackgroundProps) => (
  <Box className="background-wrapper">
    <Box className="background-top-area">
      <Box className="background-circle-item">
        <CircleGenerator size="size250" color="circleLightBlue">
          <CircleGenerator size="size200" color="innerBlue">
            <CircleGenerator size="size150" color="white">
              <img className="background-logo" src={imgSrc} alt="logo" />
            </CircleGenerator>
          </CircleGenerator>
        </CircleGenerator>
      </Box>
      <Box className="background-circle-item">
        <CircleGenerator size="size150" color="circleLightBlue" />
      </Box>
      <Box className="background-circle-item">
        <CircleGenerator size="size110" color="circleLightBlue" />
      </Box>
      <Box className="background-circle-item">
        <CircleGenerator size="size52" color="circleLightBlue" />
      </Box>
      <Box className="background-circle-item">
        <CircleGenerator size="size250" color="circleLightBlue">
          <CircleGenerator size="size110" color="innerBlue" />
        </CircleGenerator>
      </Box>
      <Box className="background-circle-item">
        <CircleGenerator size="size110" color="circleLightBlue" />
      </Box>
      <Box className="background-circle-item">
        <CircleGenerator size="size52" color="circleLightBlue" />
      </Box>
      <Box className="background-circle-item">
        <CircleGenerator size="size110" color="circleLightBlue" />
      </Box>
    </Box>
    <Box className="children-container">{children}</Box>
  </Box>
);

export default Background;
