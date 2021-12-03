import styled from "styled-components";

export const InfoContainer = styled.div`
  background: #fafafa;
  padding: 160px 0px;
  align-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";
  @media screen and (max-width: 960px) {
    grid-template-areas: "col1" "col2";
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  z-index: 1;

  padding-left: 50px;

  @media screen and (max-width: 960px) {
  padding-left: 0px;
    
  }
`;

export const TopLine = styled.p`
  font-size: 24px;
  line-height: 29.05px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 16px;
`;

export const Heading = styled.p`
  color: #333333;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const Heading2 = styled.h1`
  color: #333333;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 16px;
`;

export const Subtitle = styled.p`
  color: #333333;
  font-size: 16px;
  line-height: 24px;
  max-width: 440px;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const LockImg = styled.img`
  transition: 1s ease;

  &:hover {
    -webkit-transform: rotateZ(-20deg);
    -ms-transform: rotateZ(-20deg);
    transform: rotateZ(-20deg);
    transition: 1s ease;
  }

  @media screen and (max-width: 78px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    width: 90%;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
  }
`;
