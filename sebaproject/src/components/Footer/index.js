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
                                    Data Privacy
                                </FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Explore </FooterLinkTitle>
                                <FooterLink>
                                    FAQs
                                </FooterLink>
                                <FooterLink>
                                    Teleconsultation Guide
                                </FooterLink>
                                <FooterLink>
                                    Appointment Guide 
                                </FooterLink>
                        </FooterLinkItems>

                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Payment and Pricing </FooterLinkTitle>
                                <FooterLink>
                                    Teleconsultation Pricing
                                </FooterLink>
                                <FooterLink>
                                    Payment Methods
                                </FooterLink>
                                <FooterLink>
                                    Refund Policies
                                </FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Outreach </FooterLinkTitle>
                                <FooterLink>
                                    Feedback
                                </FooterLink>
                                <FooterLink>
                                    Contact Us
                                </FooterLink>
                                <FooterLink>
                                    Join Us
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