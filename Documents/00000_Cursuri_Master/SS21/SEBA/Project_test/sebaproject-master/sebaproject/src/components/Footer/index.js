import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIconLink, SocialIcons} from './FooterElements';
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                                <FooterLink to = "/about">
                                    Who are we?
                                </FooterLink>
                                <FooterLink>
                                    Terms of Services
                                </FooterLink>
                                <FooterLink>
                                    Blah Blah Blah
                                </FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Something </FooterLinkTitle>
                                <FooterLink>
                                    Something
                                </FooterLink>
                                <FooterLink>
                                    Something more
                                </FooterLink>
                                <FooterLink>
                                    Something more...
                                </FooterLink>
                        </FooterLinkItems>

                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Jhinga La la HOO </FooterLinkTitle>
                                <FooterLink>
                                    HoO
                                </FooterLink>
                                <FooterLink>
                                    Hoo
                                </FooterLink>
                                <FooterLink>
                                    Blah Blah Blah
                                </FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Ja, Bitte </FooterLinkTitle>
                                <FooterLink>
                                    Something
                                </FooterLink>
                                <FooterLink>
                                    Something more
                                </FooterLink>
                                <FooterLink>
                                    Something more...
                                </FooterLink>
                        </FooterLinkItems>

                    </FooterLinksWrapper>

                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to = "/">HELIXIR</SocialLogo>
                        <WebsiteRights>HELIXIR ⓒ {new Date().getFullYear()} All Rights Reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook"> <FaFacebook/> </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="YouTube"> <FaYoutube/> </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram"> <FaInstagram/> </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn"> <FaLinkedin/> </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter"> <FaTwitter/> </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;