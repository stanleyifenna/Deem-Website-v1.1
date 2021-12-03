import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #f4f8ff;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 150px 10rem 0px 10rem;

  @media screen and (max-width: 480px) {
    padding: 80px 10rem 20px 10rem;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  max-width: 400px;
  height: auto;
  width: 100%;
  display: grid;
  margin: 0 auto 80px auto;
  padding: 50px 32px;
  border-radius: 8px;
  z-index: 1;
  box-shadow: 0px 4px 32px rgba(223, 235, 255, 0.9);
  background: #ffffff;

  @media screen and (max-width: 400px) {
    padding: 50px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #000000;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
`;

export const FormP = styled.p`
  margin-bottom: 40px;
  color: #595959;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  color: #fff;
  font-size: 14px;
`;

export const FormInput = styled.input`
  margin-bottom: 32px;
  padding: 16px 16px;
  border: one;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #1a71ff;
  padding: 16px 0;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #0f76d1;
  }
`;
