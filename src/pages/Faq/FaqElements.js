import styled from "styled-components";

export const InfoSec = styled.div`
  background: #eff5ff;

  padding: 160px 0px 100px 0px;
`;

export const InfoSec2 = styled.div`
  padding: 0px 0px 160px 0px;
  background: #ffffff;
  margin-top: -100px;
`;

export const TopLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
  line-height: 47px;
  padding-bottom: 16px;
  color: #00348d;
`;

export const Ecllipse = styled.div`
  background: #ccdfff;
  box-shadow: none;
  border: none;
  border-radius: 8px;
  max-width: 62px;
  height: 8px;
  padding-left: 60px;
  padding-top: 6px;
  padding-right: 20px;
  text-decoration: none;
`;

export const EclispeWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #fff;
  margin-top: 15rem;

  @media (max-width: 768px) {
    padding: 10 25px;
    padding-top: 4px;
  }

  @media (max-width: 480px) {
    margin-bottom: -15rem;
  }
`;

export const Wrap = styled.div`
  background: #fff;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  border-bottom: 1px solid #efefef;
  h1 {
    padding: 0.5rem;
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    line-height: 29.38px;
    color: #0d0d0d;
    align-items: center;
  }
  span {
    margin-right: 2rem;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 18px;
      font-style: normal;
      font-weight: normal;
      line-height: 24.38px;
      text-align: left;
      color: #0d0d0d;
    }
  }
`;

export const Dropdown = styled.div`
  background: #f8fafb;
  color: #0d0d0d;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 25px;
  border-bottom: 1px solid #efefef;
  border-top: 1px solid #efefef;
  p {
    font-size: 16px;
    line-height: 23.5px;
    padding-top: 10px;
    font-weight: 400;
    color: #000000;
  }

  @media (max-width: 768px) {
    padding: 20px 25px;
    width: 100%;
    height: 130px;

    p {
      padding-top: 10px;
      padding-bottom: 10px;
      font-weight: 400;
      color: #000000;
    }
  }

  @media (max-width: 480px) {
    height: 170px;

    p {
      padding-top: 20px;
      font-size: 15px;
      line-height: 23.56px;
      font-weight: 400;
      color: #000000;
    }
  }
`;
