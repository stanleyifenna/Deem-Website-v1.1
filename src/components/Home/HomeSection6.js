import React from "react";
import { Container } from "../../globalStyles";

import {
  InfoContainer,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  ImgWrap,
  TopLine,
  Heading,
  Heading2,
  Subtitle,
  LockImg,
} from "./HomeSection6Elements";

function HomeSection6({
  subHead,
  headline,
  description,
  img,
  alt,
  description2,
}) {
  return (
    <div>
      <InfoContainer>
        <Container>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <LockImg src={img} alt={alt} width="60%" height="auto" />
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <TopLine>{headline}</TopLine>
                <Heading>{description}</Heading>
                <Heading2>{subHead}</Heading2>
                <Subtitle>{description2}</Subtitle>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </Container>
      </InfoContainer>
    </div>
  );
}

export default HomeSection6;
