import React from "react";
import { Container } from "../../globalStyles";

import {
  InfoContainer,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  ImgWrap,
  InfoRow2,
  Column3,
  Column4,
  TextWrapper2,
  ImgWrap2,
  TopLine2,
  TopLine,
  Heading,
  Subtitle,
  Img,
} from "./HomeSection3Elements";
import "./HomeSection3.css";
function HomeSection3({
  stepone,
  steptwo,
  stepthree,
  stepfour,
  one,
  two,
  three,
  four,
  title1,
  title2,
  title3,
  headline1,
  title4,
  Step1,
  Step2,
  Step3,
  Step4,
  description1,
  description2,
  description3,
  description4,
  headline2,
}) {
  return (
    <>
      <InfoContainer>
        <h5 className="how-works">{headline1}</h5>
        <h5 className="payment-steps">{headline2}</h5>
        <Container>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>
                  {" "}
                  <p className="steps">{title1}</p>
                </TopLine>
                <Img src={stepone} alt={one} className="merchant-img" />
                <Heading>
                  <h2 className="titles">{Step1}</h2>
                </Heading>
                <Subtitle>
                  <p className="descriptions">{description1}</p>
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <TopLine>
                  {" "}
                  <p className="steps">{title2}</p>
                </TopLine>
                <Img src={steptwo} alt={two} className="merchant-img" />
                <Heading>
                  <h2 className="titles">{Step2}</h2>
                </Heading>
                <Subtitle>
                  <p className="descriptions">{description2}</p>
                </Subtitle>
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow2>
            <Column3>
              <TextWrapper2>
                <TopLine2>
                  {" "}
                  <p className="steps top-part">{title3}</p>
                </TopLine2>
                <img src={stepthree} alt={three} className="merchant-img" />
                <Heading>
                  <h2 className="titles">{Step3}</h2>
                </Heading>
                <Subtitle>
                  <p className="descriptions">{description3}</p>
                </Subtitle>
              </TextWrapper2>
            </Column3>
            <Column4>
              <ImgWrap2>
                <TopLine>
                  {" "}
                  <p className="steps">{title4}</p>
                </TopLine>
                <Img src={stepfour} alt={four} className="merchant-img" />
                <Heading>
                  <h2 className="titles">{Step4}</h2>
                </Heading>
                <Subtitle>
                  <p className="descriptions">{description4}</p>
                </Subtitle>
              </ImgWrap2>
            </Column4>
          </InfoRow2>
        </Container>
      </InfoContainer>
    </>
  );
}

export default HomeSection3;
