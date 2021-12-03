import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Button2 } from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  BtnWrap,
  AndriodImg,
  RecImg
} from './HomeSectionElements';

const linkStyle = {
  textDecoration: "none",
};

function HomeSection({
  lightBg,
  headline,
  description,
  buttonLabel,
  buttonLabel2,
  img,
  alt,
  img2,
  alt2,
  imgStart,
  start
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <Heading >{headline}</Heading>
                <Subtitle>{description}</Subtitle>
                <BtnWrap>
                <Link to='/EmailPage' style={linkStyle}>
                  <Button>
                    {buttonLabel}
                  </Button>
                </Link>
                <Link to='/EmailPage'style={linkStyle}>
                  <Button2>
                  <AndriodImg>
                  <img
                        src="images/google-play.svg"
                        alt="App"
                        
                      />
                    </AndriodImg>
                    {buttonLabel2}
                  </Button2>
                </Link>
                </BtnWrap>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <RecImg src={img2} alt={alt2} />
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default HomeSection;
