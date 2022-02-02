import React from "react";
import styled from "styled-components"; 
import BgImg from "../assets/bg-image.png";


const Section = styled.section`
  background-image: url(${BgImg});
  height: 785px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Content = styled.div`
  width: 100%;
  height: 100px;
`;
const Left = styled.div`
  padding-left: 800px;
  padding-top: 3px;
`;
const Title = styled.p`
  font-size: 55px;
  color: #04050a;
  font-weight: 400;
  text-align: center;
`;
const Desc = styled.p`
  width: 472px;
  font-size: 20px;
  color:  #ffd966;
  line-height: 30px;
  margin-top: 58px;
`;

const Home = () => {
  return (
    <>
      
      <Section>
        <Content>
          <Left>
            <Title>
              Your Plants will THANK YOU!
            </Title>
            <Desc>
                We will help navigate the needs of your plant specifically for you. < br/> Create an account, list your plants and we will be there every step of the way.
            </Desc>
            
          </Left>
        </Content>
      </Section>
    </>  

  )
}

export default Home;