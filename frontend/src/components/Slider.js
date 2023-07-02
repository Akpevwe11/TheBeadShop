import { ArrowLeftOutlined, ArrowRightOutlined, 
} from '@material-ui/icons';
import React, { useState } from 'react';
import styled from "styled-components"
import { sliderItems } from './data';
import {LinkContainer } from 'react-router-bootstrap';


const Container = styled.div`
width: 100%; 
height: 100vh; 
display: flex; 
background-color: coral; 
position: relative; 
overflow: hidden; 
`

const Arrow = styled.div` 
   width: 50px; 
   height: 50px; 
   background-color: #fff7f7; 
   border-radius: 50%; 
   display: flex; align-items: center; 
   justify-content: center; 
   position: absolute; 
   top: 0; 
   bottom: 0;
   left: ${props=> props.direction === 'left' && '10px'};
   right: ${props=> props.direction === 'right' && '10px'};
 
   margin: auto; 
   cursor: pointer; 
   opacity: 0.5; 
   z-index: 2; 

   `


const Wrapper = styled.div`
height: 100%; 
display: flex; 
transition: all 1.5s ease;
transform:translateX(${props=>props.slideIndex * -100}vw);
`

const Slide = styled.div `
   width: 100vw; 
   height: 100vh; 
   display: flex; 
   align-items: center; 
`;
const ImgContainer = styled.div `
 height: 100%; 
   width: 100% ;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   display:flex; 
   z-index: 1; 
   
`;

const Image = styled.img`
   height:80;
      z-index: 1;

`
const InfoContainer = styled.div `
   flex: 1; 
   padding: 50px;  
   display: flex; 
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
   
`;

const Title = styled.h1`
font-size: 70px; 
color: white; 
text-shadow: 2px 2px 4px #000000;
text-align: center; 

`;
const Desc = styled.p`
margin: 50px 0px; 
font-size: 20px; 
font-weight: bold; 
color: white;
letter-spacing: 3px; 
text-shadow: 2px 2px 4px #000000;
text-align: center; 
`; 
const Button = styled.button `
background-color: white; /* Green */
 border: none;
 color: black;
 padding: 15px 32px;
 text-align: center;
 text-decoration: none;
 display: inline-block;
 font-size: 16px;
 cursor: pointer;
 align-item:center; 
 box-shadow: 5px 5px 10px 2px rgba(0,0,0,.2);
 &:hover {
     background-color: #e9f5f5; 
     transition: .5s ease; 
     transform: scale(1.1);
     
   } 
`




export const Slider = () => {
   
   const [slideIndex, setSlideIndex] = useState(0);

   const handleClick = (direction) => {
           if(direction==="left")     {
               setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
           }else {
               setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
           }

   };
 return (
     <Container>
       <Arrow direction="left" onClick={() => handleClick("left")}>
           <ArrowLeftOutlined />
       </Arrow>
       <Wrapper slideIndex={slideIndex}>
           {sliderItems.map((item) => (
               <Slide>
           <ImgContainer style={{ backgroundImage: `url(${item.img})`}}>
                   <InfoContainer>
                       <Title>{item.title}</Title>
                       <Desc>{item.desc}
                       </Desc>
                    <LinkContainer to='/products'>
                       <Button>SHOP NOW</Button>
                    </LinkContainer>
                   </InfoContainer>
                       
           </ImgContainer>
                    
           </Slide>

           ))}
           
           
          
       </Wrapper>
       <Arrow direction="right" onClick={() => handleClick("left")}>
           <ArrowRightOutlined />
       </Arrow>

     </Container>
 );
};
