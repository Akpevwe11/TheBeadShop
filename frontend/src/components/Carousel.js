import React, { useState, useEffect, useCallback } from 'react'
import '../Carousel.css'
import { images } from "../Helpers/CarouselData.js"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { LinkContainer } from 'react-router-bootstrap'
const Carousel = () => {
    const autoScroll = true; 
    
    let intervalTime = 2000;
    const [currImg, setCurrImg] = useState(0); 

   
let slideLength = images.length 

const nextSlide = useCallback(
    () => {
        setCurrImg( currImg === 0  ? slideLength - 1 : currImg - 1);
    },[currImg, slideLength]
)

// 

const prevSlide = () => {
            setCurrImg(currImg === slideLength - 1 ? 0:
       currImg + 1);

}

useEffect(() => {
    setCurrImg(0)
}, [])
    
    useEffect(() => {

        let slideInterval;

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

        autoScroll && auto()
       
        return () => clearInterval(slideInterval)
    }, [autoScroll,intervalTime, nextSlide])
    

    return (
        <div className="carousel">
        <div className='carouselInner' style={{ backgroundImage: `url(${images[currImg].img})`}}>
          
        <div className="left" onClick ={prevSlide}>                
                
                    <ArrowBackIosIcon  style={{ fontSize: 30 }} />
                </div>
                <div className="centre">  

                <h1 className="ads"> 
            {images[currImg].title}
                 </h1>
                 <LinkContainer to='/products'>
                 <p className='shopnow'>{images[currImg].subtitle}</p>    
    
                </LinkContainer>
                                
                </div>
               

                <div className="right"
                onClick ={nextSlide}>
                     
           
                <ArrowForwardIosIcon  style={{ fontSize: 30 }} />
                </div>
                
        </div>
        
        </div>
    );
}

export default Carousel; 

