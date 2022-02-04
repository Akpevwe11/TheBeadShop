import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'



const Category = ({category}) => {

   return (     
           
    
    <Card className="my-3 p-3 rounded" key={category._id}>
    <Link to={`/category/${category._id}`}>
     <Card.Img src={category.image} variant='top' />
    </Link>
    <Card.Body>
        <Link to={`/category/${category._id}`}>
        </Link>
        <p style={{fontSize: "20px"}}>{category.title}</p>
    </Card.Body>
</Card>
   )
    

}

export default Category; 
