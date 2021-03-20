import React from 'react'
import { 
    SidebarContainer, Icon, CloseIcon ,
    SidebarWrapper, SidebarMenu, SidebarLink, 
    SideBtnWrap, SidebarRoute, 
    
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" smooth={true} duration={500} spy={true} exact="true" offset={10} onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="about" smooth={true} duration={500} spy={true} exact="true" offset={10} onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="skills" smooth={true} duration={500} spy={true} exact="true" offset={10} onClick={toggle}>
                        Skills
                    </SidebarLink>
                    <SidebarLink to="services" smooth={true} duration={500} spy={true} exact="true" offset={10} onClick={toggle}>
                        Services
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/contact">
                        Contact
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
