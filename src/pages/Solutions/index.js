import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Button2 } from "../../globalStyles";
import HomeSection10 from "../../components/Home/HomeSection10";
import Routes from "../../Routes";


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
  BtnWrap,
  CircleImg,
  AndriodImg,
  Section,
} from "./SolutionsElements";
import "./solutions.css";

function Solutions({ imgStart, start }) {
  return (
    <Routes>
      <InfoSec className="so">
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine>
                  <CircleImg>
                    <img src="images/star.svg" alt="star" />
                  </CircleImg>
                  Ease your payment concerns
                </TopLine>
                <Heading>DeemPay Merchant App</Heading>
                <Subtitle>
                  We bring mobile point-of-sale acceptance to every businesses
                  of all size at a secure and lower cost
                </Subtitle>
                <BtnWrap>
                  <Link to="/EmailPage">
                    <Button>Create free account</Button>
                  </Link>
                  <Link to="/EmailPage">
                    <Button2>
                      <AndriodImg>
                        <img src="images/google-play.svg" alt="App" />
                      </AndriodImg>
                      Get on Android
                    </Button2>
                  </Link>
                </BtnWrap>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src="images/solution-app.svg" alt="App" />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
      <Section>
        <HomeSection10 />
      </Section>
    </Routes>
  );
}

export default Solutions;
