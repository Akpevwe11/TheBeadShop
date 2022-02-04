import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col, Container } from 'react-bootstrap'
import Category from '../components/Category';
import Message from '../components/Message'
import Loader from '../components/Loader'
import Carousel from '../components/Carousel'

import { categoryList } from '../action/categoryActions'


const LandingScreen = () => {
    const dispatch = useDispatch()

    const listOfCategory = useSelector( state => state.categoryList)
    const {loading, error, categories } = listOfCategory

   

   
 
 useEffect(() => {
     dispatch(categoryList()) 
    }, [dispatch]) 

    return (
        <>
        <Carousel /> 
    
        {loading ? (
        <Loader /> 
        )
         : error ? (
             <Message variant='danger'>{error}</Message> 
         ) : 
         <Container>
         <h1  className="text-center"
         > Shop By Category</h1>
        <Row>
       
        {categories.map(category => (
            <Col sm={12} md={6} lg={4} xl={3} key={category._id}>
                <Category category={category} key={category._id}/>
             
            </Col>
        ))}
       
      </Row>
      </Container>
}
        </>
    )
};

export default LandingScreen;