import React from "react";
import { Container, Button3 } from "../../globalStyles";
import { Link } from "react-router-dom";
import {
  InfoContainer,
  Img1,
  Img2,
  Img3,
  Img4,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  ImgWrap,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  RightImg,
  WebApp,
  FreeImg,
  FreeImg2,
} from "./HomeSection5Elements";

const linkStyle = {
  textDecoration: "none",
};

function HomeSection5({
  headline,
  description,
  description2,
  headline2,
  buttonLabel,
  merchant,
  webApp,
  img1,
  img2,
  img3,
  img4,
  img11,
  alt11,
  alt1,
  alt2,
  alt3,
  alt4,
}) {
  return (
    <div>
      <InfoContainer>
        <Container>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>{headline}</TopLine>
                <Heading>{description}</Heading>
                <Subtitle>
                  <Link to="/Pricing" style={linkStyle}>
                    <Button3>{buttonLabel}</Button3>
                  </Link>
                </Subtitle>
                <BtnWrap>
                  <WebApp>
                    {webApp}
                  </WebApp>
                  <FreeImg>
                      <img src={img11} alt={alt11} />
                    </FreeImg>
                  <WebApp>
                    {merchant}
                  </WebApp>
                  <FreeImg2>
                      <img src={img11} alt={alt11} />
                    </FreeImg2>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <TopLine>{headline2}</TopLine>
                <Heading>{description2}</Heading>
                <Subtitle>
                  <RightImg>
                    <Img1>
                      <img src={img1} alt={alt1} />
                    </Img1>
                    <Img2>
                      <img src={img2} alt={alt2} />
                    </Img2>
                  </RightImg>
                  <RightImg>
                    <Img3>
                      <img src={img3} alt={alt3} />
                    </Img3>
                    <Img4>
                      <img src={img4} alt={alt4} />
                    </Img4>
                  </RightImg>
                </Subtitle>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </Container>
      </InfoContainer>
    </div>
  );
}

export default HomeSection5;
