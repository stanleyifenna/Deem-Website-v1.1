import React, { useState } from "react";
import "./Navbar.css";
import { Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavBtn,
  NavLinks,
  NavBtnLink,
  NavLink,
} from "./NavbarElements";

const linksStyle = {
  textDecoration: "none",
};

const linkStyle = {
  textDecoration: "none",
  color: "#000000",
};

const solutions = (
  <Menu className="top-menu">
    <div className="img-dropdown">
      <img src="images/solutions.svg" alt="cardreader" className="pad-img1" />
    </div>
    <Menu.Item className="mo">
      <Link to="/Solutions" className="pad3" style={linksStyle}>
        <span className="">DeemPay App</span>
      </Link>
    </Menu.Item>
    <hr className="dropdown-horizontal-line2"></hr>
    <Menu.Item className="mo4">
      <Link to="/Solutions" className="pad3" style={linksStyle}>
        DeemPay Dashboard
      </Link>
    </Menu.Item>
  </Menu>
);

const help = (
  <Menu className="top-menu">
    <div className="img-dropdown">
      <img src="images/help.svg" alt="cardreader" className="pad-img1" />
    </div>
    <Menu.Item className="mo">
      <Link to="/Faq" className="pad" style={linksStyle}>
        FAQ
      </Link>
    </Menu.Item>
    <hr className="dropdown-horizontal-line"></hr>
    <Menu.Item className="mo4">
      <Link to="/SupportCenter" className="pad" style={linksStyle}>
        Support Center
      </Link>
    </Menu.Item>
  </Menu>
);

const company = (
  <Menu className="top-menu">
    <div className="img-dropdown">
      <img src="images/company.svg" alt="cardreader" className="pad-img1" />
    </div>

    <Menu.Item className="mo">
      <Link to="/About" className="pad2" style={linksStyle}>
        About
      </Link>
    </Menu.Item>
    <hr className="dropdown-horizontal-line2"></hr>
    <Menu.Item className="mo4">
      <Link to="/Careers" className="pad2" style={linksStyle}>
        {" "}
        Careers{" "}
      </Link>
    </Menu.Item>
  </Menu>
);

function Navbar({ toggle }) {
  const [navbr, setNavbr] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbr(true);
    } else {
      setNavbr(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav className={navbr ? "navbr active" : "navbr"}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <img src={"../../images/deempay-logo.svg"} alt="logo" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            {<img src="images/open.svg" alt="icon" />}
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks style={linkStyle}>
                <Dropdown overlay={solutions}>
                  <div className="ant-dropdown-link nav-links">
                    Solutions
                    {
                      <img
                        src="images/drop.svg"
                        alt="icon"
                        className="drop-down"
                      />
                    }
                  </div>
                </Dropdown>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks style={linkStyle}>
                <Link to="/Pricing" style={linkStyle}>
                  Pricing
                </Link>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks style={linkStyle}>
                <Dropdown overlay={help}>
                  <div className="ant-dropdown-link nav-links">
                    Help
                    {
                      <img
                        src="images/drop.svg"
                        alt="icon"
                        className="drop-down"
                      />
                    }
                  </div>
                </Dropdown>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks style={linkStyle}>
                <Dropdown overlay={company}>
                  <div className="ant-dropdown-link nav-links">
                    Company
                    {
                      <img
                        src="images/drop.svg"
                        alt="icon"
                        className="drop-down"
                      />
                    }
                  </div>
                </Dropdown>
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavLink to="/EmailPage" style={linkStyle}>
              Log In
            </NavLink>
            <NavBtnLink to="/EmailPage">Get Started</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
