import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { Link } from 'react-router-dom';


// Styles


const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? 'transparent' : 'white')};
    height: 80px;
    margin-top: -80px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width:960px){
        transition: 0.8s all ease;
    }
`;


const NavbarContainer = styled.div`
    display:flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

const NavLogo = styled(Link)`
    color: #7d451b;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display:flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width:768px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;


const NavBtn = styled.nav`
    display:flex;
    align-items:center;

    @media screen and (max-width: 768px){
        display:none;
    }
`;

const NavBtnLink = styled(Link)`
    border-radius: 50px;
    background: #d19c1d;
    white-space: nowrap;
    padding: 10px 22px;
    color: #7d451b;
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






let isLoggedIn = localStorage.getItem("token");




const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const { push } = useHistory();

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("message");

        push("/");
        window.location.reload(true);
       
    
        
    
    }

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
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>WATER MY PLANTS</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    {isLoggedIn ?
                    <NavBtn>
                        <NavBtnLink onClick={handleLogout}>Logout</NavBtnLink>
                    </NavBtn> :
                    <NavBtn>
                        <NavBtnLink to="/login">LOGIN</NavBtnLink>   
                </NavBtn>}

                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;