import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const FooterContainer = styled.div`
    background-color: #fff;
`;

export const FooterWrap = styled.div`
    padding: 20px 20px 40px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 16px;
    text-align: center;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`;

export const FooterLink = styled.a`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;

    @media screen and (max-width: 820px) {
        margin-top: -40px;
    }

    @media screen and (max-width: 768px) {
        margin-top: -40px;
    }

    @media screen and (max-width: 480px) {
        margin-top: -50px;
    }
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const SocialLogo = styled(LinkR)`
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    width: 150px;
    height: auto;
    /* font-size: 1.5rem; */
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    @media screen and (max-width: 820px) {
        justify-content: center;
    }

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;

export const WebsiteRights = styled.small`
    color: #000;
    margin-bottom: 16px;
    font-size: 15px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: #000;
    font-size: 24px;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`