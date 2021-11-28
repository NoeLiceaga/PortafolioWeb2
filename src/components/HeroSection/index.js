import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Portafolio de Evidencias</HeroH1>
        <HeroP>Proyecto creado con React por Noe Liceaga</HeroP>
        <HeroP>Universidad Politecnica de San Luis Potosi</HeroP>
        <HeroBtnWrapper>
          <Button
            to="Parcials"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            offset={60}
            dark="true"
            duration={500}
          >
            Vista {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
