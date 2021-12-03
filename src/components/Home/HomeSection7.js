import React from "react";
import {
  InfoContainer,
  Partners,
  Values,
  PartnersWrap,
  PartnerImg,
  PartnerImg2,
  PartnerImg3,
  PartnerImg4,
  PartnerImg5,
} from "./HomeSection7Elements";
import { Container } from "../../globalStyles";

function HomeSection7({
  headline2,
  pethah,
  gtBank,
  paythru,
  genesys,
  tence,
  headline,
  alt,
  alt2,
  alt3,
  alt4,
  alt5,
}) {
  return (
    <div>
      <InfoContainer>
        <Partners>{headline}</Partners>
        <Values>{headline2}</Values>
        <Container>
          <PartnersWrap>
            <PartnerImg src={gtBank} alt={alt3} />
            <PartnerImg2 src={paythru} alt={alt2} />
            <PartnerImg3 src={genesys} alt={alt} />
            <PartnerImg4 src={pethah} alt={alt5} />
            <PartnerImg5 src={tence} alt={alt4} />
          </PartnersWrap>
        </Container>
      </InfoContainer>
    </div>
  );
}

export default HomeSection7;
