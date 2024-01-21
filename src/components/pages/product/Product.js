import React from 'react'
import './Product.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import {Link } from 'react-router-dom'
let Product = () => {

  const {id} = useParams();
  const [product, setProduct] = useState([])

  const getProduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    let data = await response.json()
    setProduct(data)
  }
  useEffect(() => {
    getProduct()
  }, [])
 
return(
  <>
  <div className='productContainer'>
    <div className='pContainer '>
    <div className='Pleft'>
 <img className='Pimage' src={product.image}/>
    </div>
    <div className='Pright'>
      <h4>{product.category}</h4>
      <h1>{product.title}</h1>
      <p>Rating {product.rating && product.rating.rate}</p>
      <h3><i>Price </i> :  $ {product.price}</h3>
      <p>{product.description}</p>

      <div className='btns'>
            <button className='PbuttonL'>Add to Cart </button>
            <Link to='/cart'> <button className='PbuttonD'> Go to Cart </button></Link> 
      </div>
    </div>
    </div>
 </div>
 </>
)

}

export default Product