import React from 'react'
import {FaGithub, FaTwitter, FaYoutube, FaLinkedin} from 'react-icons/fa';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
    background-color: white;
`;

const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

const SocialMediaWrap = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction:column;
    }
`;

const SocialLogo =styled(Link)`
    color: green;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`;

const WebsiteRights = styled.small`
    color: green;
    margin-bottom: 16px;
`;

const SocialIcons = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    width: 240px;
`;

const SocialIconLink = styled.a`
    color: green;
    font-size: 24px;

`;


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>WATER MY PLANTS</SocialLogo>
                        <WebsiteRights> Water My Plants  © {new Date().getFullYear()} All rights reserved. </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://github.com/Build-Week-Water-My-Plants-033" target="_blank" aria-label="Github"><FaGithub/></SocialIconLink>
                            <SocialIconLink href="//www.twitter.com/bloomtech" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                            <SocialIconLink href="//www.youtube.com/watch?v=JRXtVE5Cct8&ab_channel=BloomInstituteofTechnology" target="_blank" aria-label="Youtube"><FaYoutube/></SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/school/bloominstituteoftechnology/" target="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer