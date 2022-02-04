import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {Form, Button, Row, Col } from 'react-bootstrap'
import {useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import login from '../action/userActions'

const LoginScreen = () => {
        let location = useLocation()
        let navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin 

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if(userInfo) {
            navigate(redirect) 
        }

    }, [navigate, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault(); 
        dispatch(login(email, password))
        // DISPATCH LOGIN 
    }

    return <FormContainer>
            <h1>Sign In</h1>
            {error && <Message variant='danger'>{error}</Message>}

            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controllerId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                     type='email'
                      placeholder='Enter email'
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                    ></Form.Control>
                </Form.Group>
                <Form.Group controllerId='password'>
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control
                     type='password'
                      placeholder='Enter password'
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                    ></Form.Control>
                <Button type='submit' variant='primary'>
                    Sign In 
                </Button>
                </Form.Group>
            </Form>
        <Row className='py-3'>
        <Col>
            New Customer?{' '}
            <Link to={ redirect ? `/register?redirect=${redirect}` : '/register'}>
                Register 
            </Link>
        </Col>

        </Row>


    </FormContainer>
}

export default LoginScreen