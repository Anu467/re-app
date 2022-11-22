import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>ABOUT US</FooterLinkTitle>
              <FooterLink to="/Signin">Home</FooterLink>
              <FooterLink to="/Signin">Services</FooterLink>
              <FooterLink to="/Contact">Contact</FooterLink>
              <FooterLink to="/Signin">Sign In</FooterLink>
              <FooterLink to="/Signup">Sign Up</FooterLink>         
            </FooterLinkItems>
           
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            
            <FooterLinkItems>
              <FooterLinkTitle>SOCIAL MEDIA</FooterLinkTitle>
              <FooterLink to='/'>Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
              <FooterLink to="/">LinkeIn</FooterLink>          
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
            INSURANCE ANALYTICS
            </SocialLogo>
            <WebsiteRights>INSUR © {new Date().getFullYear()} All rights reserved </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;