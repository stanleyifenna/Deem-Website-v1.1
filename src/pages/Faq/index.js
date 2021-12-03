import React, { useState } from "react";
import { Data } from "./Data.js";
import { FiPlusSquare, FiMinusSquare } from "react-icons/fi";
import { IconContext } from "react-icons";
import { Container } from "../../globalStyles";
import Routes from "../../Routes";


import {
  InfoSec,
  InfoSec2,
  TopLine,
  Ecllipse,
  AccordionSection,
  Wrap,
  Dropdown,
  EclispeWrap,
} from "./FaqElements";
import HomeSection9 from "../../components/Home/HomeSection9.js";

const Faq = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <Routes>
      <InfoSec>
        <Container>
          <TopLine>Frequently Asked Questions</TopLine>

          <EclispeWrap>
            <Ecllipse />
          </EclispeWrap>
        </Container>
      </InfoSec>
      <InfoSec2>
        <Container>
          <IconContext.Provider value={{ color: "#200e32", size: "15px" }}>
            <AccordionSection>
              {Data.map((item, index) => {
                return (
                  <>
                    <Wrap onClick={() => toggle(index)} key={index}>
                      <h1>{item.question}</h1>
                      <span>
                        {clicked === index ? (
                          <FiMinusSquare />
                        ) : (
                          <FiPlusSquare />
                        )}
                      </span>
                    </Wrap>
                    {clicked === index ? (
                      <Dropdown>
                        <p>{item.answer}</p>
                      </Dropdown>
                    ) : null}
                  </>
                );
              })}
            </AccordionSection>
          </IconContext.Provider>
        </Container>
      </InfoSec2>
      <HomeSection9 />
    </Routes>
  );
};

export default Faq;
