import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #fafafa;
`;

export const FooterWrap = styled.div`
  padding: 24px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;

  @media screen and (max-width: 480px) {
    padding: 24px;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

export const FooterLinksWrapper2 = styled.div`
  display: flex;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  padding-left: 0px;
  color: #fff;
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px 10px 10px 0px;
    width: 100%;
  }
`;

export const FooterLinkItems2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  max-width: 200px;
  box-sizing: border-box;
  padding-left: 90px;

  @media screen and (max-width: 900px) {
    padding-left: 10px;
  }

  @media screen and (max-width: 850px) {
    padding-left: 0px;
  }

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px 10px 10px 0px;
    width: 100%;
  }
`;
export const FooterLinkItems3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  max-width: 260px;
  box-sizing: border-box;
  padding-left: 150px;

  @media screen and (max-width: 900px) {
    padding-left: 10px;
  }

  @media screen and (max-width: 850px) {
    padding-left: 0px;
  }

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px 10px 10px 0px;
    width: 100%;
  }
`;

export const FooterLinkItems4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  max-width: 250px;
  box-sizing: border-box;
  padding-left: 130px;
  color: #fff;

  @media screen and (max-width: 480px) {
    margin: 0;
    padding-top: 10px;
    padding-left: 50px;
    width: 100%;
  }

  @media screen and (max-width: 400px) {
    margin: 0;
    padding: 10px 10px 10px 20px;
    width: 100%;
  }
`;

export const FooterLinkItems5 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 16px;
  text-align: left;
  max-width: 250px;
  box-sizing: border-box;
  padding-left: 150px;

  @media screen and (max-width: 480px) {
    margin: 0;
    padding-top: 10px;
    padding-left: 50px;
    width: 100%;
  }

  @media screen and (max-width: 400px) {
    margin: 0;
    padding: 10px 10px 10px 20px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
  line-height: 24px;
  font-size: 16px;
  font-weight: 500;
  color: #000000;
`;

export const FooterLink = styled(Link)`
  color: #565656;
  text-decoration: none;
  margin-bottom: 0.5rem;
  line-height: 24px;
  font-size: 16px;

  &:hover {
    color: #1a71ff;
    transition: 0.3s ease-out;
  }
`;

export const FooterLink2 = styled(Link)`
  color: #565656;
  text-decoration: none;
  margin-bottom: 0.5rem;
  line-height: 24px;
  font-size: 16px;

  &:hover {
    color: #565656;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLogo = styled(Link)`
  color: #fff;
`;

export const FooterLine = styled.hr`
  border: 0.5px solid #dfdfdf;
  width: 100%;
  margin-top: 20px;
`;
