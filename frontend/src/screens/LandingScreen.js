import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col, Container } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import  { Slider } from '../components/Slider'
import { Categoryheader } from '../components/Categoryheader'
import { Categories } from '../components/Categories'
import { NewsLetter } from '../components/NewsLetter'
import { Animation } from '../components/Animation'
import Testimonial from '../components/Testimonial'

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

        <Slider />
        <Categoryheader />
        <Categories />
        <Animation />
        <NewsLetter />
        <Testimonial /> 


        </>
    )
};

export default LandingScreen;
