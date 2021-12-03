import React from "react";
import { Container } from "../../globalStyles";
import Routes from "../../Routes";


import {
  InfoSec,
  InfoSec2,
  TopLine,
  Ecllipse,
  Headline,
  EclispeWrap,
} from "./SupportElements";
import HomeSection8 from "../../components/Home/HomeSection8.js";

const SupportCenter = () => {
  return (
    <Routes>
      <InfoSec>
        <Container>
          <Headline>Hi! How can we help?</Headline>
          <EclispeWrap>
            <Ecllipse />
          </EclispeWrap>
        </Container>
      </InfoSec>
      <InfoSec2>
        <Container>
          <TopLine>
            {" "}
            For Support, you can easily reach us at hello@deempay.com. We are
            only a step away.
          </TopLine>
        </Container>
      </InfoSec2>
      <HomeSection8 />
    </Routes>
  );
};

export default SupportCenter;
