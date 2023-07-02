import React from 'react';
import styled from 'styled-components';


const Container = styled.div `
flex: 1;  
margin: 3px; 
height: 50vh; 
position: relative; 
padding: 0.2rem; 

`;
const Image = styled.img `
width: 100%; 
height: 100%; 
object-fit: cover; 
align-item: center;

`;
const Info = styled.div`
    position: absolute;
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; 
    display: flex; 
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
`;
const Title = styled.h1` 
color: white; 
text-shadow: 2px 2px 4px #000000;
margin-bottom: 20px; 
text-align: center;
font-size: 25px; 
`;
const Button = styled.button `
    border:none; 
    padding: 10px; 
    background-color: white; 
    color: grey; 
    cursor: pointer; 
    font-weight: 600;
    &:hover {
      background-color: #e9f5f5; 
      transition: .5s ease; 
      transform: scale(1.1);
      
    }
`;


export const CategoryItem = ({item}) => {
  return (
      <Container>
      
        <Image  src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            
            <Button>SHOP NOW</Button>
            
        </Info>
      </Container>

  );
};
