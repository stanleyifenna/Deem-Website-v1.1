import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: #ffffff;
`;

export const Card = styled.div`
  background: #1a71ff;
  box-shadow: none;
  border: none;
  border-radius: 40px !important;
  max-width: 1300px;
  height: 311px;
  padding-left: 60px;
  padding-top: 69px;
  padding-right: 20px;
  text-decoration: none;
  border-radius: 4px;

  @media screen and (max-width: 960px) {
    height: 480px;
    border-radius: 20px;
    padding: 30px 40px;
    margin-left: 0px;
  }

  @media screen and (max-width: 768px) {
    height: 480px;
    border-radius: 20px;
    padding: 30px 40px;
    margin-left: 0px;
  }
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
  @media screen and (max-width: 960px) {
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
`;

export const ImgWrapper = styled.div`
  max-width: 600px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};

  @media screen and (max-width: 480px) {
    margin-top: -4rem;
  }
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;

  @media screen and (max-width: 960px) {
    margin-top: -50px;
  }


  @media screen and (max-width: 768px) {
    margin-top: -40px;
  }

  @media screen and (max-width: 495px) {
    margin-top: 0px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 35px;
  font-size: 34px;
  max-width: 400px;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;

  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 480px) {
    display: grid;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const AndriodImg = styled.span`
  padding-right: 10px;
`;
