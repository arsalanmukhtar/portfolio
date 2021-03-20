import React, { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll';

import {
    Nav, NavbarContainer, NavLogo,
    MobileIcon, NavMenu, NavItem, NavLinks,
    NavBtn, NavBtnLink
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import logo from '../../images/dark_logo.png'

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    })

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        <img class="tplmaps" src={logo} />
                    </NavLogo>
                    <MobileIcon onClick={toggle} >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="home" smooth={true} duration={500} spy={true} exact="true" offset={30}>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact="true" offset={30}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="skills" smooth={true} duration={500} spy={true} exact="true" offset={30}>Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" smooth={true} duration={500} spy={true} exact="true" offset={30}>Services</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/contact">Contact</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
