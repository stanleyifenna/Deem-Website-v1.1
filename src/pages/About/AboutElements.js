import styled from "styled-components";

export const InfoContainer0 = styled.div`
  background: #ffffff;
  padding: 100px 0;

`;



export const InfoContainer = styled.div`
  background: #ffffff;
  color: #000000;
  padding: 50px 0px;

  @media screen and (max-width: 960px) {
    padding-left: 100px 0px;
  }

  @media screen and (max-width: 480px) {
    padding-top: 90px;
    padding-bottom: 0px;

  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  height: 860px;
  padding: 0 24px;
  z-index: 1;
  
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
  margin-left: auto;
  padding-top: 0;
  padding-bottom: 60px;
  z-index: 1;
  @media screen and (max-width: 480px) {
    margin-right: 0px;
  }
`;

export const TopLine = styled.p`
  color: #000;
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  color: #000;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  margin-bottom: 16px;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  color: #000;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 16px;
  max-width: 440px;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  margin-left: 10px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const InfoContainer2 = styled.div`
  background: #fafafa;
  color: #000000;
  margin: 50px 0px;
  @media screen and (max-width: 960px) {
    padding-left: 100px 0px;
  }

  @media screen and (max-width: 480px) {
    margin: 0px 0px;
    padding-top: 30px;
  }
`;

export const InfoWrapper2 = styled.div`
  display: grid;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  height: 860px;
  padding: 0 24px;
  z-index: 1;
  
`;

export const InfoRow2 = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col3 col4";
  @media screen and (max-width: 960px) {
    grid-template-areas: "col3" "col4";
  }
`;

export const Column3 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col3;
`;

export const Column4 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col4;
`;

export const TextWrapper2 = styled.div`
  max-width: 540px;
  padding-top: 0;
  margin-left: auto;

  padding-bottom: 60px;
  z-index: 1;
`;

export const TopLine2 = styled.p`
  color: #000;
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 16px;
`;

export const Heading2 = styled.h1`
  color: #000;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  margin-bottom: 16px;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle2 = styled.p`
  color: #000;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 16px;
  max-width: 440px;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const BtnWrap2 = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap2 = styled.div`
  max-width: 555px;
  margin-left: 60px;
  height: 100%;
  @media screen and (max-width: 480px) {
    margin-left: 0px;
    margin-top: -15px;

  }
`;

export const Img2 = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
