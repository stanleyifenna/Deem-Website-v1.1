import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: #fff;

  @media screen and (max-width: 480px) {
    padding: 80px 0;
  }
`;

export const TopLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: 700;
  line-height: 70.5px;
  padding-bottom: 16px;
  color: #000000;

  @media screen and (max-width: 480px) {
    font-size: 38px;
    line-height: 40px;
  }
`;

export const Heading = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 23.5px;
  flex-direction: column;
  text-align: center;
  padding-bottom: 16px;
  color: #000000;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Subtitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  flex-direction: column;
  text-align: center;
  padding-top: 16px;
  color: #000000;
`;

export const Position = styled.span`
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  flex-direction: column;
  display: flex;
`;
