import React, {useState} from "react";
import styled from "styled-components"; 
import { Link } from 'react-router-dom';
import BgImg from "../assets/bg-image.png";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

const HeroContainer = styled.div`
    background-image:  url(${BgImg});
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

    }
`;

const HeroContent = styled.div`
    z-index:3;
    max-width: 1200px;
    position: absolute;
    padding: 8px, 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size:32px;
    }
`;

const HeroP =styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    
    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    @media screen and (max-width: 480px){
        font-size:18px;
    }
`;

const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;

const Button = styled(Link)`
    border-radius:50px;
    background: ${({primary}) => (primary ? '#7d451b' : '#010606' )};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px' )};
    color: ${({ dark }) => (dark ? '#fff': '#010606')};
    font-size: ${({ fontBig }) =>(fontBig ? '20px' :'16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff':'#01BF71' )};
    }
`;

const Home = () => {
  const [hover, setHover] = useState(false)
  const onHover = () => {
      setHover(!hover)
  }
  return (
    <>
    <HeroContainer id="home">
            <HeroContent>
                <HeroH1>Your Plants will THANK-YOU</HeroH1>
                <HeroP>
                Create an account, list your plants, and we will help navigate the needs of each plant.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to="signup" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover} 
                    primary='true' 
                    dark='true'
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    >Get started {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
    </>  

  )
}

export default Home;