import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 600px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const TopLine = styled.div`
  color: #00112c;
  font-size: 16px;
  font-style: regular;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  max-width: 525px;
  line-height: 1.1;
  font-weight: 600;
  color: #0d0d0d;

  @media screen and (max-width: 480px) {
    font-size: 40px;
   }

  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 375px) {
    display: grid;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const Subtitle = styled.p`
  max-width: 450px;
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

export const CircleImg = styled.span`
  padding-right: 10px;
`;

export const AndriodImg = styled.span`
  padding-right: 10px;
`;

export const Section = styled.div`
  padding-top: 12rem;

  @media screen and (max-width: 768px) {
    margin-top: 15rem;
  }
`;
