import React, { useState } from 'react'
import { Progress, ProgressDone, SubTitle } from './SkillsElements';

const SingleSkill = ({ sid, skillName, skillLevel, darkText }) => {

    const [style, setStyle] = useState({});
    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${skillLevel}%`
        }
        setStyle(newStyle);
    }, 300);

    return (
        <>
            <SubTitle darkText={darkText}>{skillName}</SubTitle>
            <Progress id={sid}>
                <ProgressDone style={style}>
                    {skillLevel}%
                </ProgressDone>
            </Progress>
        </>
    )
}

export default SingleSkill
