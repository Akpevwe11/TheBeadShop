import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import './App.css';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'

 const  App = () => {
  return (
   <>
    <Header />
   
   
        
   <main>
      <div class="body">
              <Routes>
              <Route path='/' element={< Carousel/>} /> 
              
              <Route path='/products' element={<HomeScreen />} />
              <Route path='/product/:id' element={<ProductScreen />}  />
            <Route path='/cart/:id' element={<CartScreen />} />
            <Route path='/cart/' element={<CartScreen />} />
               
               </Routes>
        </div>
        <div class="category">

        </div>
    </main>
     
        
    
  
    <Footer />
    </>
  )
}


export default App;
