import React from 'react'
import { Button } from '../ButtonElements'
import {
    SkillsContainer, SkillsWrapper, SkillsRow, Column1,
    TextWrapper, TopLine, Heading, SubTitle,
    BtnWrap, Column2, ImgWrap, Img
} from './SkillsElements'

import Skill from './SingleSkill';
import { 
    skillObj1, skillObj2, skillObj3, skillObj4, 
    skillObj5, skillObj6, skillObj7, skillObj8,
    skillObj9, skillObj10, skillObj11, skillObj12,
} from './SingleSkillData';

const SkillSection = ({ lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2 }) => {


    return (
        <>
            <SkillsContainer lightBg={lightBg} id={id}>
                <SkillsWrapper>
                    <SkillsRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Skill {...skillObj1} />
                                
                                <Skill {...skillObj3} />
                                <Skill {...skillObj4} />
                                <Skill {...skillObj5} />
                                
                                <Skill {...skillObj7} />
                                
                                <Skill {...skillObj9} />
                                <Skill {...skillObj10} />
                                <Skill {...skillObj11} />
                                
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </SkillsRow>
                </SkillsWrapper>
            </SkillsContainer>
        </>
    )
}

export default SkillSection
