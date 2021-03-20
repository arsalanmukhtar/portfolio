import React, { useState } from 'react'
import Modal from 'react-modal';

import analysis from '../../images/analysis.svg';
import mapbox from '../../images/mapbox.svg';
import dbms from '../../images/dbms.svg';
import network from '../../images/network.svg';
import carto from '../../images/carto.svg';
import landuse from '../../images/landuse.svg';

import {
    ServicesContainer, ServicesH1, ServicesWrapper,
    ServicesCard, ServicesIcon, ServicesH2, 
    ServicesP, SrvBtn, SrvBtnLink
} from './ServicesElements';

const Services = () => {

    return (
        <ServicesContainer id="services">
            <ServicesH1>My Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesH2>GIS & RS Analysis</ServicesH2>
                    <ServicesIcon src={analysis} />
                    <SrvBtn>
                        <SrvBtnLink to="/service1">View More</SrvBtnLink>
                    </SrvBtn>
                </ServicesCard>
                <ServicesCard>
                    <ServicesH2>MapBox Tile Rendering</ServicesH2>
                    <ServicesIcon src={mapbox} />
                    <SrvBtn>
                        <SrvBtnLink to="/service2">View More</SrvBtnLink>
                    </SrvBtn>
                </ServicesCard>
                <ServicesCard>
                    <ServicesH2>DBMS Automation</ServicesH2>
                    <ServicesIcon src={dbms} />
                    <SrvBtn>
                        <SrvBtnLink to="/service3">View More</SrvBtnLink>
                    </SrvBtn>
                </ServicesCard>
                <ServicesCard>
                    <ServicesH2>Digitization & Utility Networking</ServicesH2>
                    <ServicesIcon src={network} />
                    <SrvBtn>
                        <SrvBtnLink to="/service4">View More</SrvBtnLink>
                    </SrvBtn>
                </ServicesCard>
                <ServicesCard>
                    <ServicesH2>Cartography & Mapping</ServicesH2>
                    <ServicesIcon src={carto} />
                    <SrvBtn>
                        <SrvBtnLink to="/service5">View More</SrvBtnLink>
                    </SrvBtn>
                </ServicesCard>
                <ServicesCard>
                    <ServicesH2>Land Use Planning & Management</ServicesH2>
                    <ServicesIcon src={landuse} />
                    <SrvBtn>
                        <SrvBtnLink to="/service6">View More</SrvBtnLink>
                    </SrvBtn>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
