import React, { useState } from "react";
import { Container, Button6 } from "../../globalStyles";
import Routes from "../../Routes";

import {
  InfoSec,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Position,
} from "./CareerElements";

const Careers = () => {
  const [show, setShow] = useState(false);

  return (
    <Routes>
      <InfoSec>
        <Container>
          <TopLine>Come work with us</TopLine>
          <Heading>
            We are working on new and innovative ways to help businesses in
            Africa to grow quickly in the digital payment space.
          </Heading>
          <BtnWrap>
            <Button6 onClick={() => setShow(!show)}>
              <Position>Our Positions</Position>
            </Button6>
          </BtnWrap>
          {show ? (
            <Subtitle>
              Sorry, we currently do not have any openings at the moment
            </Subtitle>
          ) : (
            show
          )}
        </Container>
      </InfoSec>
    </Routes>
  );
};

export default Careers;
