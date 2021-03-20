import React, { useState } from 'react'

import { 
    HeroContainer, HeroBg, VideoBg,
    HeroContent,HeroH1, HeroP, HeroBtnWrapper,
    ArrowRight, ArrowForward
} from './HeroElements';
import { Button, DownloadAnchor } from '../ButtonElements'
import Video from '../../videos/video.mp4';

import resume from '../../assets/resume.pdf';

const HeroSection = () => {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
    };

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>GIS Automation Made Easy</HeroH1>
                <HeroP>I provide GIS & Datebase Management Solutions</HeroP>
                <HeroBtnWrapper>
                    <DownloadAnchor href={resume} download onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                        {hover ? "Download My Resume" : "Want to Hire Me ?"}
                    </DownloadAnchor>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
