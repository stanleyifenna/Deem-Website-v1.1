import React from "react";
import { Link } from "react-router-dom";
import { Container, Button5 } from "../../globalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  ImgWrapper,
  Img,
  BtnWrap,
  Subtitle,
  Card,
} from "./HomeSection9Elements";


const linkStyle = {
  textDecoration: "none",
};

function HomeSection9({
  lightBg,
  imgStart,
  start,
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <Card>
            <InfoRow imgStart={imgStart}>
              <InfoColumn>
                <TextWrapper>
                  <Heading>More Questions?</Heading>
                  <Subtitle>Contact us directly</Subtitle>
                  <BtnWrap>
                    <Link to="/EmailPage" style={linkStyle}>
                      <Button5>Mail Us</Button5>
                    </Link>
                  </BtnWrap>
                </TextWrapper>
              </InfoColumn>
              <InfoColumn>
                <ImgWrapper start={start}>
                  <Img src="images/faq.png" alt="mail-card" />
                </ImgWrapper>
              </InfoColumn>
            </InfoRow>
          </Card>
        </Container>
      </InfoSec>
    </>
  );
}

export default HomeSection9;
