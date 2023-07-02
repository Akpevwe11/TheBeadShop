import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonial.css'
import { Avatar } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import avatar1 from '../images/avartar1.jpeg'
import avatar2 from '../images/avatar2.jpeg'
import avatar3 from '../images/avatar3..jpeg'

const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
      </div>
    );
  };

const Testimonial = () => {
  return (
      <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
      >


    <div style={{ width: "50%", textAlign: "center" }}>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
            <Card img= {avatar1}/>
            <Card  img= {avatar2}/>
            <Card img= {avatar3} />
        </Slider>
    </div>
</div>
  )
}

const Card = ({img}) => {
    return (
        <div className='testimonial' style={{display: 'flex', alignItems: 'center',
         flexDirection: "column",
         textAlign: 'center',
         color: "grey"
         }}
         >
            <Avatar
            imgProps={{ style: { borderRadius: "50%"}}}
            src={img}
            style={{width:120, height:120, border: '1px solid lightgray',
            padding: 7}}/>
            <p>
            is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type
             specimen book. It has
             </p>
             <p style={{ fontStyle: "italic", marginTop: 25}}><span style={{ fontWeight: 500,
             color: "green"}}>PAULA WILSON,</span> Media Analyst</p>
        </div>
    )
}

export default Testimonial
