import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components'
import {mobile} from "../responsive"
const Container = styled.div`
height: 60vh; 
background-color: #ff69b4; 
display: flex; 
align-items: center; 
justify-content: center; 
flex-direction: column;
margin-bottom: Collapse;  
`
const Title = styled.h1`
font-size: 50px; 
font-weight: 500; 
color: white; 
margin-bottom: 20px; 
text-align: center; 
${mobile({fontSize: "30px"})}
`;
const Desc = styled.div`
font-size: 24px;
font-weight: 300; 
color: white; 
margin-bottom: 20px;
text-align: center;  
${mobile({textSize: "8px", pargin:"2rem"})}
`;
const InputContainer = styled.div`
width: 50%; 
height: 40px; 
background-color: white; 
display: flex; 
justify-content: space-between; 
border: 1px sold lightgrey; 
${mobile({textAlign: "80%"})}

`;
const Input = styled.input`
border: none; 
flex: 8; 
padding-left: 20px; 
`;
const Button  = styled.button `
flex: 1; 
border: none; 
background-color: black; 
color: white; 
`;

export const NewsLetter = () => {
  return (
            <Container>
                <Title>Hello Gorgeous!</Title>
                <Desc>Join our newsletter and be the first to know about new arrivals,<br /> 
                 exclusive offers, and special events!
                </Desc>
                <InputContainer>
                    <Input placeholder ="your email" />
                    
                    <Button>
                    <Send />
                    </Button>
                </InputContainer>
            </Container>
    )
  }

