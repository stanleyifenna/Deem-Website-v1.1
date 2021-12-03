import styled from "styled-components";

export const InfoContainer = styled.div`
  background: #ffffff;
  padding: 160px 0px;
`;

export const PartnersWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 62px;
  padding-left: 24px;
  padding-right: 24px;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 768px) {
    display: grid;
    align-items: center;
    justify-content: center;
  }
`;

export const Partners = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  font-style: bold;
  line-height: 47px;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    align-items: flex-start;
  }
`;

export const Values = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 10px;

  @media screen and (max-width: 480px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const PartnerImg = styled.img`
  margin-left: -0px;

  @media screen and (max-width: 768px) {
    padding-bottom: 40px;
    padding-left: 0px;
    padding-right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PartnerImg2 = styled.img`
  padding-left: 72px;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0px;
  }
`;

export const PartnerImg3 = styled.img`
  padding-left: 72px;
  padding-right: 72px;

  @media screen and (max-width: 768px) {
    padding-top: 40px;
    padding-left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PartnerImg4 = styled.img`
  padding-right: 72px;

  @media screen and (max-width: 768px) {
    padding-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
  }
`;

export const PartnerImg5 = styled.img`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
