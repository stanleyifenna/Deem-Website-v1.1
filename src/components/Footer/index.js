import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterLogo,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksWrapper2,
  FooterLinkItems,
  FooterLinkItems2,
  FooterLinkItems3,
  FooterLinkItems4,
  FooterLinkItems5,
  FooterLinkTitle,
  FooterLink,
  FooterLink2,
  FooterLine,
} from "./FooterElements";
import "./Footer.css";

const linkStyle = {
  textDecoration: "none",
};


function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>
                <FooterLogo to="/" onClick={toggleHome}>
                  <img src={"../../images/deempay-logo.svg"} alt="logo" />
                </FooterLogo>
              </FooterLinkTitle>
              <FooterLink2 style={linkStyle} >294 Herbert Macaulay</FooterLink2>
              <FooterLink2 style={linkStyle}>Way, Yaba 101212</FooterLink2>
              <FooterLink2 style={linkStyle}>Lagos, Nigeria</FooterLink2>
              <br />
              <FooterLink2 style={linkStyle} >hello@deempay.com</FooterLink2>
              <FooterLink2 style={linkStyle} >+23408134902354</FooterLink2>
            </FooterLinkItems>
            <FooterLinkItems2>
              <FooterLinkTitle>Our Solutions</FooterLinkTitle>
              <FooterLink to="/Solutions" style={linkStyle} >DeemPay App</FooterLink>
              <FooterLink to="/Solutions" style={linkStyle} >DeemPay Dashboard</FooterLink>
            </FooterLinkItems2>
            <FooterLinkItems3>
              <FooterLinkTitle>Company</FooterLinkTitle>
              <FooterLink to="/About" style={linkStyle} >About</FooterLink>
              <FooterLink to="/Careers" style={linkStyle} >Careers</FooterLink>
            </FooterLinkItems3>
          </FooterLinksWrapper>
          <FooterLinksWrapper2>
            <FooterLinkItems4>
              <FooterLinkTitle>Help</FooterLinkTitle>
              <FooterLink
                target="_blank"
                rel="noreferrer"
                to={"//www.youtube.com/channel/UCR_nKmQ37Yp49aqyyItxW6A"}
                style={linkStyle} 
              >
                Video Tutorial
              </FooterLink>
              <FooterLink to="/Faq" style={linkStyle} >FAQ</FooterLink>
              <FooterLink to="/SupportCenter" style={linkStyle} >Support Center</FooterLink>
            </FooterLinkItems4>
            <FooterLinkItems5>
              <FooterLinkTitle>Legal</FooterLinkTitle>
              <FooterLink to="/Privacy" style={linkStyle} >Privacy Policy</FooterLink>
              <FooterLink to="/TermsofService" style={linkStyle} >Terms of Service</FooterLink>
            </FooterLinkItems5>
          </FooterLinksWrapper2>
        </FooterLinksContainer>
        <FooterLine />
        <section className="social-media">
          <div className="social-media-wrap">
            <small className="website-rights">
              © Copyright 2021 DeemPay. All Rights Reserved
            </small>
            <div className="social-icons">
              <Link
                className="social-icon-link"
                to={
                  "//www.linkedin.com/company/deempay/about/?viewAsMember=true"
                }
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Link>
              <Link
                className="social-icon-link"
                to={"//twitter.com/deempay"}
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </Link>

              <Link
                className="social-icon-link"
                to={"//www.youtube.com/watch?v=-L1r1xVGYSE"}
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </Link>
              <Link
                className="social-icon-link"
                to={"//www.facebook.com/DeemPay-120820392659915/"}
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </Link>
            </div>
          </div>
        </section>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
