import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Heebo', sans-serif;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 24px;
  padding-left: 24px;

  @media screen and (max-width: 991px) {
    padding-right: 24px;
    padding-left: 24px;
  }
`;

export const Button = styled.button`
  border-radius: 8px;
  background: #1a71ff;
  white-space: nowrap;
  margin-right: 16px;
  padding: 10px 8px;
  color: #ffffff;
  font-size: 17px;
  outline: none;
  border: none;
  height: 48px;
  font-weight: 500;
  width: 186px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #0f76d1;
    color: #ffffff;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
    font-weight: 400;
    line-height: 15px;
    margin-right: 8px;
    width: 175px;

  }

  @media screen and (max-width: 375px) {
    margin-bottom: 16px;
  }
`;

export const Button2 = styled.button`
  border-radius: 8px;
  background: #000000;
  white-space: nowrap;
  padding: 10px 8px;
  color: #ffffff;
  font-size: 17px;
  outline: none;
  border: none;
  height: 48px;
  font-weight: 500;
  width: 186px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(15, 10, 10);
    color: #ffffff;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
    font-weight: 400;
    line-height: 15px;
    width: 175px;

  }
  
`;

export const Button3 = styled.button`
  border-radius: 8px;
  background: #000000;
  white-space: nowrap;
  padding: 8px 16px;
  color: #ffffff;
  font-size: 17px;
  outline: none;
  border: none;
  height: 48px;
  font-weight: 500;
  width: 128px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(15, 10, 10);
    color: #ffffff;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
    font-weight: 400;
    line-height: 15px;
  
  }


`;

export const Button4 = styled.button`
  border-radius: 8px;
  background: #ffffff;
  white-space: nowrap;
  margin-right: 16px;
  padding: 10px 8px;
  color: #1a71ff;
  font-size: 17px;
  outline: none;
  border: none;
  height: 48px;
  font-weight: 500;
  width: 186px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f7e2e2;
    color: #1a71ff;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 16px;
    font-size: 15px;
    font-weight: 400;
    line-height: 15px;
    width: 175px;
  }
`;

export const Button5 = styled.button`
  border-radius: 8px;
  background: #ffffff;
  white-space: nowrap;
  padding: 8px 16px;
  color: #1a71ff;
  font-size: 17px;
  outline: none;
  border: none;
  height: 48px;
  font-weight: 500;
  width: 186px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f7e2e2;
    color: #1a71ff;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
    font-weight: 400;
    line-height: 15px;
    width: 175px;

  }

`;

export const Button6 = styled.button`
  border-radius: 8px;
  background: #1a71ff;
  white-space: nowrap;
  padding: 10px 8px;
  color: #ffffff;
  font-size: 17px;
  outline: none;
  border: none;
  height: 48px;
  font-weight: 500;
  width: 186px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #0f76d1;
    color: #ffffff;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
    font-weight: 400;
    line-height: 15px;
    width: 175px;

  }

`;

export default GlobalStyle;
