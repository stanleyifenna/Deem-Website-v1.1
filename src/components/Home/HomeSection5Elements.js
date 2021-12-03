import styled from "styled-components";

export const InfoContainer = styled.div`
  background: #ffffff;
  padding: 170px 0px;
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
  color: #000;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 35px;
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
  padding-top: 15px;

  @media screen and (max-width: 375px) {
    display: grid;
  }
`;

export const WebApp = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding-right: 8px;
  color: #000;

  @media screen and (max-width: 375px) {
    padding-right: 2px;
  }

`;
export const ImgWrap = styled.div`
  max-width: 600px;
  height: 100%;
  margin-top: -40px;
`;

export const FreeImg = styled.div`
  padding-right: 43px;

  @media screen and (max-width: 480px) {
    padding-right: 8px;
  }
`;

export const FreeImg2 = styled.div`
  columns: #fff;
`;

export const RightImg = styled.div`
  display: flex;

  @media screen and (max-width: 1200px) {
    display: grid;
    align-items: center;
    justify-content: center;
}
`;

export const Img1 = styled.span`
  padding-top: 0px;
`;

export const Img2 = styled.span`
  padding-top: 0px;
  padding-left: 24px;
  @media screen and (max-width: 1200px) {
    padding-left: 0px;
  padding-top: 16px;
  display: grid;
    align-items: center;
    justify-content: center;

}
`;

export const Img3 = styled.span`
  padding-top: 16px;
  padding-right: 24px;

  @media screen and (max-width: 1200px) {
  padding-right: 0px;
    display: grid;
    align-items: center;
    justify-content: center;
  
}
`;

export const Img4 = styled.span`
  padding-top: 16px;

  @media screen and (max-width: 1200px) {
    padding-left: 0px;
    display: grid;
    align-items: center;
    justify-content: center;
  
}
`;
