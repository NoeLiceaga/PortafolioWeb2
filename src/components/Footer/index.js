import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from "./FooterElements";
const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="">...</FooterLink>
              <FooterLink to="">...</FooterLink>
              <FooterLink to="">...</FooterLink>
              <FooterLink to="">...</FooterLink>
              <FooterLink to="">...</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="">Instagram</FooterLink>
              <FooterLink to="">Facebook</FooterLink>
              <FooterLink to="">YouTube</FooterLink>
              <FooterLink to="">Twitter</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialWrap>
                <SocialLogo to='/' onClick={toggleHome}>
                    PrograWeb2
                </SocialLogo>
                <WebsiteRights>PrograWeb2  © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href="https://www.instagram.com/?hl=es" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" aria-label="YouTube">
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                </SocialIcons>
            </SocialWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
