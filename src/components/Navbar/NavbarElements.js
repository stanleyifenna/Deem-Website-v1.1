import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1300px;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 991px) {
    display: block;
    position: absolute;
    top: 0;
    margin-top: -10px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-left: -22px;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #000000;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  display: flex;
  margin-top: 7.5px;
  align-items: center !important;
  text-decoration: none;
  padding: 0 1.3rem;
  height: 100%;
  cursor: pointer;
`;

export const NavLink = styled(LinkR)`
  color: #000000;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  cursor: pointer;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 8px;
  height: 48px;
  background: #1a71ff;
  white-space: nowrap;
  width: 128px;
  padding: 10.5px 20px;
  color: #ffffff;
  font-weight: 500;
  font-size: 17px;
  border: none;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #0f76d1;
    color: #ffffff;
    text-decoration: none;
  }
`;
