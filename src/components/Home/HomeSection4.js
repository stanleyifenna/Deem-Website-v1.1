import React from "react";
import { Container } from "../../globalStyles";

import {
  InfoContainer,
  InfoContainer2,
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
} from "./HomeSection4Elements";
import "./HomeSection4.css";
function HomeSection4({
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
    <div>
      
        <InfoContainer className="g">
          <h5 className="how-work">{headline1}</h5>
          <h5 className="payment-step">{headline2}</h5>
          <Container>
            <InfoRow>
              <Column1>
                <TextWrapper>
                  <TopLine>
                    <div className="top-case to-top">
                      <h2 className="top-titles">{Step1}</h2>
                    </div>
                  </TopLine>
                  <Img src={stepone} alt={one}  className="merchant-img" />
                  <Heading>
                    <p className="step">{title1}</p>{" "}
                  </Heading>
                  <Subtitle>
                    {" "}
                    <p className="description">{description1}</p>
                  </Subtitle>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <TopLine>
                    <div className="top-case toptop">
                      <h2 className="top-titles">{Step2}</h2>
                    </div>
                  </TopLine>
                  <Img src={steptwo} alt={two}  className="merchant-img" />

                  <Heading>
                    <p className="step">{title2}</p>
                  </Heading>
                  <Subtitle>
                    <p className="description">{description2}</p>
                  </Subtitle>
                </ImgWrap>
              </Column2>
              </InfoRow>

          </Container>
              
        </InfoContainer>

        <InfoContainer2>
        <Container>

            <InfoRow2>
              <Column3>
                <TextWrapper2>
                  <TopLine2>
                    {" "}
                    <div className="top-case toptop2">
                      <h2 className="top-titles">{Step3}</h2>
                    </div>{" "}
                  </TopLine2>
                  <Img src={stepthree} alt={three} className="merchant-img" />
                  <Heading>
                    <p className="step">{title3}</p>
                  </Heading>
                  <Subtitle>
                    <p className="description">{description3}</p>
                  </Subtitle>
                </TextWrapper2>
              </Column3>
              <Column4>
                <ImgWrap2>
                  <TopLine>
                    {" "}
                    <div className="top-case2">
                      <h2 className="top-titles">{Step4}</h2>
                    </div>{" "}
                  </TopLine>
                  <Img src={stepfour} alt={four} className="merchant-img" />
                  <Heading>
                    <p className="step">{title4}</p>
                  </Heading>
                  <Subtitle>
                    <p className="description">{description4}</p>
                  </Subtitle>
                </ImgWrap2>
              </Column4>
            </InfoRow2>
          </Container>
        </InfoContainer2>
      
    </div>
  );
}

export default HomeSection4;
