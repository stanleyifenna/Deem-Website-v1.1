import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import "./Sidebar.css";
import {
  SidebarContainer,
  SidebarBtn,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarRoute,
  SidebarRoute1,
  SidebarLink,
  SideBtnWrap,
  SidebarLogo,
} from "./SidebarElements";

const linksStyle = {
  textDecoration: "none",
};

const linkStyle = {
  textDecoration: "none",
  color: "#000000",
};

const linkyStyle = {
  textDecoration: "none",
  color: "#ffffff",
};



const Sidebar = ({ isOpen, toggle }) => {
  const solutions = (
    <Menu className="bar-menu">
      <div className="img-dropdown">
        <img src="images/solutions.svg" alt="cardreader" className="pad-img1" />
      </div>
      <Menu.Item className="mo">
        <Link
          to="/Solutions"
          className="pad3"
          onClick={toggle}
          style={linksStyle}
        >
          DeemPay App
        </Link>
      </Menu.Item>
      <hr className="dropdown-horizontal-line2"></hr>
      <Menu.Item className="mo4">
        <Link
          to="/Solutions"
          className="pad3"
          onClick={toggle}
          style={linksStyle}
        >
          DeemPay Dashboard
        </Link>
      </Menu.Item>
    </Menu>
  );

  const help = (
    <Menu className="bar1-menu">
      <div className="img-dropdown">
        <img src="images/help.svg" alt="cardreader" className="pad-img1" />
      </div>
      <Menu.Item className="mo">
        <Link to="/Faq" className="pad" onClick={toggle} style={linksStyle}>
          FAQ
        </Link>
      </Menu.Item>
      <hr className="dropdown-horizontal-line"></hr>
      <Menu.Item className="mo3">
        <Link
          to="/SupportCenter"
          className="pad"
          onClick={toggle}
          style={linksStyle}
        >
          Support Center
        </Link>
      </Menu.Item>
    </Menu>
  );

  const company = (
    <Menu className="bar-menu">
      <div className="img-dropdown">
        <img src="images/company.svg" alt="cardreader" className="pad-img1" />
      </div>

      <Menu.Item className="mo">
        <Link to="/About" className="pad2" onClick={toggle} style={linksStyle}>
          About
        </Link>
      </Menu.Item>
      <hr className="dropdown-horizontal-line2"></hr>
      <Menu.Item className="mo4">
        <Link
          to="/Careers"
          className="pad2"
          onClick={toggle}
          style={linksStyle}
        >
          Careers
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarLogo>
        <Link onClick={toggle} to="/">
          <img src={"../../images/deempay-logo.svg"} alt="logo" />
        </Link>
      </SidebarLogo>
      <Icon onClick={toggle}>{<img src="images/close.svg" alt="icon" />}</Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink  style={linkStyle}>
            <Dropdown overlay={solutions}>
              <div className="ant-dropdown-link nav-links">
                Solutions
                {<img src="images/drop.svg" alt="icon" className="drop-down" />}
              </div>
            </Dropdown>
          </SidebarLink>
          <SidebarLink  style={linkStyle}>
            <Link to="/Pricing" onClick={toggle} style={linkStyle}>
              Pricing
            </Link>
          </SidebarLink>
          <SidebarLink  style={linkStyle}>
            <Dropdown overlay={help}>
              <div className="ant-dropdown-link nav-links">
                Help
                {<img src="images/drop.svg" alt="icon" className="drop-down" />}
              </div>
            </Dropdown>
          </SidebarLink>
          <SidebarLink  style={linkStyle}>
            <Dropdown overlay={company}>
              <div className="ant-dropdown-link nav-links">
                Company
                {<img src="images/drop.svg" alt="icon" className="drop-down" />}
              </div>
            </Dropdown>
          </SidebarLink>
          <SidebarLink  style={linkStyle}>
            <SidebarRoute to="/EmailPage"  style={linkStyle}  onClick={toggle}>Log In</SidebarRoute>
          </SidebarLink>
          <SideBtnWrap>
            <SidebarBtn>
              <SidebarRoute1 to="/EmailPage"  style={linkyStyle}>Get Started</SidebarRoute1>
            </SidebarBtn>
          </SideBtnWrap>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
