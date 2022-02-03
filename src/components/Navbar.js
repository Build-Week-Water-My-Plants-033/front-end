import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';

import styled from 'styled-components';
import { Link } from 'react-router-dom';


// Styles


const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? 'transparent' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display:flex;
    justify-content: space-between;
    padding: 0 24px;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width:960px){
        transition: 0.8s all ease;
    }
`;

const NavLogo = styled(Link)`
    color: #d19c1d;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display:flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;


const NavBtn = styled.nav`
    display:flex;
    align-items:end;

    @media screen and (max-width: 768px){
        display:none;
    }
`;

const NavBtnLink = styled(Link)`
    border-radius: 50px;
    background: #7d451b;
    white-space: nowrap;
    padding: 10px 22px;
    color: #d19c1d;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;



// end of styles 


const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []); 

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <Nav scrollNav={scrollNav}>
                    <NavLogo to="/" onClick={toggleHome}>WATER MY PLANTS</NavLogo>
                    <NavBtn>
                        <NavBtnLink to="/login">LOGIN</NavBtnLink>   
                    </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;