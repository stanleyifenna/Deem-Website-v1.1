import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  display: grid;
  background: #fafafa;
  height: 100%;
  z-index: 999;
  width: 100%;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const SidebarLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  top: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-left: 24px;
  position: absolute;
`;

export const Icon = styled.div`
  display: block;
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  margin-top: -5px;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #000;
  padding-bottom: 2rem;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(7, 70px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &.hover {
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #000;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #000;
  }
`;

export const SidebarRoute1 = styled(LinkR)`
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #fff;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #fff;
  }
`;

export const SidebarBtn = styled.button`
  border-radius: 8px;
  background: #1a71ff;
  white-space: nowrap;
  height: 48px;
  padding: 10px 20px;
  color: #fff;
  width: 200px;
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
  }
`;
