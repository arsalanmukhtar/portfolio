import React from 'react'

import { ServiceButton } from '../ButtonElements'

import {
    ServContainer, ServWrapper, ServRow, Column1,
    TextWrapper, TopLine, Heading, SubTitle,
    BtnWrap, Column2, ImgWrap, Img
} from './SingleServiceElements';

const SingleService = ({ lightBg, id, imgStart, topLine, lightText, headLine, darkText, desc1, desc2, desc3, desc4, desc5, desc6, desc7, buttonLabel, img, alt, primary, dark, dark2 }) => {


    return (
        <>
            <ServContainer lightBg={lightBg} id={id}>
                <ServWrapper>
                    <ServRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <TopLine>{topLine}</TopLine>
                                <SubTitle darkText={darkText}>{desc1}</SubTitle>
                                <SubTitle darkText={darkText}>{desc2}</SubTitle>
                                <SubTitle darkText={darkText}>{desc3}</SubTitle>
                                <SubTitle darkText={darkText}>{desc4}</SubTitle>
                                <SubTitle darkText={darkText}>{desc5}</SubTitle>
                                <SubTitle darkText={darkText}>{desc6}</SubTitle>
                                <SubTitle darkText={darkText}>{desc7}</SubTitle>
                                <BtnWrap>
                                    <ServiceButton to="/" smooth={true} duration={500} spy={true} exact="true">{buttonLabel}</ServiceButton>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </ServRow>
                </ServWrapper>
            </ServContainer>
        </>
    )
}

export default SingleService
