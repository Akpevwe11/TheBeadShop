import React from "react"
import Carousel from "./Carousel";
import Category from "./Category";
import {Col } from 'react-bootstrap'


const Home = ({categories}) => {
 

    return (
        <>
     <Carousel />
     {categories.map(category => (
            <Col sm={12} md={6} lg={4} xl={3} key={category._id}>
                <Category category={category} key={category._id}/>
             
            </Col>
        ))}

     

        </>
    )
};

export default Home;