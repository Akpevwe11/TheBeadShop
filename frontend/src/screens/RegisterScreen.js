import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {Form, Button, Row, Col } from 'react-bootstrap'
import {useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import register from '../action/userActions'

const RegisterScreen = () => {
    let location = useLocation()
    let navigate = useNavigate()
    const [name, setName] = useState('') 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)  
    const dispatch = useDispatch()
    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo } = userRegister 

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if(userInfo) {
            navigate(redirect) 
        }

    }, [navigate, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault(); 
        if(password !== confirmPassword) {

            setMessage('passwords do not match')
        } else {
            dispatch(register(name, email, password))
        }
        
    }

    return <FormContainer>
            <h1>Sign Up</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>

            <Form.Group controllerId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                     type='name'
                      placeholder='Enter Name'
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                    ></Form.Control>
                </Form.Group>
                
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
                    >
                </Form.Control>
                <Form.Group controllerId='confirmPassword'>
                    <Form.Label>Confirm Password</Form.Label> 
                    <Form.Control
                     type='confirmPassword'
                      placeholder='confirm password'
                      value={confirmPassword}  
                      onChange={(e) => setConfirmPassword(e.target.value)} 
                    ></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Sign Up
                </Button>
                </Form.Group>
            </Form>
        <Row className='py-3'>
        <Col>
            Have an Account?{' '}
            <Link to={ redirect ? `/login?redirect=${redirect}` : '/login'}>
                Login
            </Link>
        </Col>

        </Row>


    </FormContainer>
}

export default RegisterScreen
