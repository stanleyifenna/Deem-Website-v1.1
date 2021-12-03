import React from "react";
import { Link } from "react-router-dom";
import { Container, Button2, Button4 } from "../../globalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  ImgWrapper,
  Img,
  BtnWrap,
  AndriodImg,
  Card,
} from "./HomeSection8Elements";

const linkStyle = {
  textDecoration: "none",
};

function HomeSection8({
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
                  <Heading>Start accepting payments in 3 minutes</Heading>
                  <BtnWrap>
                    <Link to="/EmailPage" style={linkStyle}> 
                      <Button4>Create free account</Button4>
                    </Link>
                    <Link to="/EmailPage" style={linkStyle}>
                      <Button2>
                        <AndriodImg>
                          <img src="images/google-play.svg" alt="App" />
                        </AndriodImg>
                        Get Android App
                      </Button2>
                    </Link>
                  </BtnWrap>
                </TextWrapper>
              </InfoColumn>
              <InfoColumn>
                <ImgWrapper start={start}>
                  <Img src="images/Appss.png" alt="Apps-group" />
                </ImgWrapper>
              </InfoColumn>
            </InfoRow>
          </Card>
        </Container>
      </InfoSec>
    </>
  );
}

export default HomeSection8;
