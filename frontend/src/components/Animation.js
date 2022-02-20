import React from 'react';
import styled from "styled-components"
import './autoanimate.css'


const Wrapper = styled.div` 
 align-items: center;
  justify-content: center;
  margin-bottom: 0rem; 
  
`;






export const Animation = () => {
  return (
      <Wrapper>
    <div className="slider">
	<div className="slide-track">
	
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height={100} width={250} alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height={100} width={250} alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height={100} width={250} alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height={100} width={250} alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height={100} width={250} alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height={100} width={250} alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height={100} width={250} alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height={100} width={250} alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height={100} width={250} alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height={100} width={250} alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height={100} width={250} alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height={100} width={250} alt="" />
		</div>
	</div>
</div>
   
</Wrapper>
  
  
  );
};
