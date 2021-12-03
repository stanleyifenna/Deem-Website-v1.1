import styled from "styled-components";

export const InfoContainer = styled.div`
  padding: 100px 0;

  @media screen and (max-width: 768px) {
    margin-top: -9rem;
  }
`;

export const InfoContainer2 = styled.div`
  padding: 100px 0;
  margin-top: 22rem;


  @media screen and (max-width: 768px) {

    margin-top: 69rem;
  }

  @media screen and (max-width: 480px) {
   margin-top: 63rem;
}

@media screen and (max-width: 375px) {

margin-top: 59rem;
}
`;




export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";
  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
  }
`;

export const InfoRow2 = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col3 col4";
  @media screen and (max-width: 768px) {
    grid-template-areas: "col3" "col4";
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column3 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col3;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const Column4 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col4;
`;

export const TextWrapper = styled.div`
  max-width: 480px;
  padding-top: 62px;
  margin-left: auto;
  padding-bottom: 0px;
  z-index: 1;
  @media screen and (max-width: 480px) {
    margin-top: 0px;
  }

  @media screen and (max-width: 768px) {
    padding-top: 0px;
    margin: auto;
    padding-bottom: 0px;
  }
`;

export const TextWrapper2 = styled.div`
  max-width: 480px;
  padding-top: -6rem;
  margin-left: auto;
  padding-bottom: 0px;
  z-index: 1;
  @media screen and (max-width: 768px) {
    padding-top: 0px;
    margin: auto;
    padding-bottom: 0px;
  }
`;

export const TopLine = styled.p`
  color: #1a71ff;
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const TopLine2 = styled.p`
  color: #1a71ff;
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  color: #000000;
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
  margin-bottom: 16px;
  @media screen and (max-width: 480px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const Heading2 = styled.h1`
  color: #000000;
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
  margin-bottom: 16px;
  @media screen and (max-width: 480px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const Subtitle = styled.p`
  color: #333333;
  font-size: 16px;
  line-height: 24px;
  font-style: regular;
  margin-bottom: 40px;
  max-width: 450px;
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const Subtitle2 = styled.p`
  color: #333333;
  font-size: 16px;
  line-height: 24px;
  font-style: regular;
  margin-bottom: 40px;
  max-width: 450px;
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const ImgWrap = styled.div`
  max-width: 500px;
  padding-top: 75px;
  margin-left: 52px;

  height: 100%;
  @media screen and (max-width: 768px) {
    align-item: center;
    padding-top: 0px;
    margin: auto;
  }

  @media screen and (max-width: 480px) {
    margin-top: -7.8rem;
  }
`;

export const ImgWrap2 = styled.div`
  max-width: 500px;
  padding-bottom: 10px;
  padding-top: 22px;
  margin-left: 52px;

  height: 100%;
  @media screen and (max-width: 768px) {
    align-item: center;
    padding-top: 0px;
    margin: auto;
  }

  @media screen and (max-width: 480px) {
    margin-top: -7.8rem;
  }
`;

export const Img = styled.img`
  width: 85%;
  margin: 0 0 10px 0;
  padding-right: 0;
  margin-left: 0px;
  @media screen and (max-width: 768px) {
    align-item: center;
    margin: auto;
    padding-top: 0px;
    padding: auto;
    width: 100%;
  }
`;

export const Img2 = styled.img`
  width: 80%;
  margin: 0 0 10px 0;
  padding-right: 0;
  margin-left: 0px;
  @media screen and (max-width: 768px) {
    align-item: center;
    margin: auto;
    padding-top: 0px;
    padding: auto;
    width: 100%;
  }
`;
