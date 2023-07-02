import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';





const Footer = () => {

    return (
<MDBFooter color="black" className="font-small pt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
        <div className=" d-lg-flex d-xs-inline justify-content-center ">
       
        <a href="/#" className='p-3'>Search</a>
         
        <a href="/#" className='p-3'>About Us</a>
               
        <a href="/#" className='p-3'>Contact Us</a>
    
        <a href="/#" className='p-3'>Shipping and Delivery</a> 
                    
        <a href="/#" className='p-3'>Stockists</a> 
        
        </div>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
    <div className='d-inline'>
 <a href="/#"><i className="fab fa-facebook-f fa-2x p-2"></i></a>
<a href="/#"><i className="fab fa-twitter fa-2x p-2"></i></a>
<a href="/#"><i className="fab fa-instagram fa-2x p-2"></i></a>
<a href="/#"><i className="fab fa-pinterest fa-2x p-2"></i></a> 
</div>
     
        <MDBContainer fluid>

 &copy; {new Date().getFullYear()} Copyright: <a href="http://#"> THEBEADSHOP </a>
      
        </MDBContainer>
      </div>
    </MDBFooter>
 

    )
 

    
}

export default Footer; 


