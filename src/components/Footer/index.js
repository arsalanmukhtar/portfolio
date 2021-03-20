import React from 'react'
import { animateScroll as scroll } from 'react-scroll';

import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../../images/light_logo.png';

import { SiFiverr } from 'react-icons/si';
import {
    FooterContainer, FooterWrap, FooterLinksContainer,
    FooterLinksWrapper, FooterLinkItems, 
    FooterLinkTitle, FooterLink, SocialMedia,
    SocialMediaWrap, SocialLogo, WebsiteRights,
    SocialIcons, SocialIconLink
} from './FooterElements';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}><img src={logo} /></SocialLogo>
                        <WebsiteRights>Arsalan &copy; {new Date().getFullYear()}. All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/arsah20/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                            <SocialIconLink href="https://twitter.com/arsal__97" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
                            <SocialIconLink href="https://github.com/arsalanmukhtar" target="_blank" aria-label="Github"><FaGithub /></SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/in/arsalanmukhtar1997/" target="_blank" aria-label="LinkedIn"><FaLinkedin /></SocialIconLink>
                            <SocialIconLink href="https://www.fiverr.com/arsal_1997" target="_blank" aria-label="Fiverr"><SiFiverr /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
