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
  padding: 40px 10rem 0px 10rem;

  @media screen and (max-width: 480px) {
    padding: 80px 10rem 0px 10rem;
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
  margin: 0 auto 40px auto;
  padding: 50px 32px;
  border-radius: 8px;
  z-index: 1;
  box-shadow: 0px 4px 32px rgba(223, 235, 255, 0.9);
  background: #ffffff;

  @media screen and (max-width: 400px) {
    padding: 10px;
    margin: 0 auto 0px auto;
  }
`;

export const Form2 = styled.form`
  max-width: 400px;
  height: auto;
  width: 100%;
  display: grid;
  margin: 0 auto 10px auto;
  padding: 12px;
  border-radius: 8px;
  border: 1px dashed #002766;
  z-index: 1;
  box-shadow: none;
  background: none;

  @media screen and (max-width: 400px) {
    padding: 8px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #002766;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
`;

export const FormH2 = styled.h1`
  color: #002766;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  color: #595959;
  font-size: 16px;
`;

export const FormInput = styled.input`
  margin-bottom: 32px;
  padding: 16px 16px;
  border: one;
  border-radius: 8px;
  color: #595959;
  border: none;
  font-size: 16px;
  background: #f7f7f7;
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

export const Text = styled.span`
  margin-top: 24px;
  text-align: center;
  color: #fff;
  font-size: 14px;
`;
