import React from "react";
import { Container } from "../../globalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  CircleImg,
} from "./HomeSection2Elements";

function HomeSection2({
  lightBg,
  topLine,
  headline,
  description,
  img,
  alt,
  imgStart,
  start,
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine>
                  <CircleImg>
                    <img src="images/cirle.svg" alt="circle" />
                  </CircleImg>
                  {topLine}
                </TopLine>
                <Heading>{headline}</Heading>
                <Subtitle>{description}</Subtitle>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default HomeSection2;
