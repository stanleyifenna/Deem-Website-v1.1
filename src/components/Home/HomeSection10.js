import React from "react";
import { Container } from "../../globalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  ImgWrapper,
  Img,
  TopLine,
  Subtitle,
  Card,
} from "./HomeSection10Elements";

function HomeSection10({
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
                  <Heading>DeemPay Merchant Dashboard</Heading>
                  <TopLine>See all transactions in one place</TopLine>
                  <Subtitle>Our WebApp enables the merchant to manage and grow their business all in one platform</Subtitle>
                </TextWrapper>
              </InfoColumn>
              <InfoColumn>
                <ImgWrapper start={start}>
                  <Img src="images/dashboard.svg" alt="dashboard" />
                </ImgWrapper>
              </InfoColumn>
            </InfoRow>
          </Card>
        </Container>
      </InfoSec>
    </>
  );
}

export default HomeSection10;
