import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const ServicesContainer = styled.div`
    padding-top: 120px;
    height: 1000px;
    background: #010606;

    @media screen and (max-width: 1000px) {
        height: 1300px;
    }

    @media screen and (max-width: 768px) {
        height: 2300px;
    }

    @media screen and (max-width: 480px) {
        height: 2200px;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
    
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;   
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        
    }
`;

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ServicesH2 = styled.h1`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`;

export const ServiceContainer = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(108deg, rgba(1,147,86,1) 0%, rgba(10,201,122,1) 100%);
`;

export const ServiceWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
`;

export const ServiceIcon = styled(LinkR)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 480px;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 80px;
    }
`;

export const ServiceContent = styled.div`
    height: 100%;
    margin-top: -80px;
    display: flex;
    flex-direction: column;
    justify-content:center;

    @media screen and (max-width: 1000px) {
        margin: 0 auto 0 auto;
        padding: 10px;
    }

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const SrvBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        /* display: none; */
    }
`;

export const SrvBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #010606;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
        background: #01bf71;
    }
`;