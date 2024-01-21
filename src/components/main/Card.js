import React from 'react'
import { useState, useEffect } from 'react'
//import Carousel from './carousel/Carousel'
import './ProductCard.css'
import { Link } from 'react-router-dom'

let Card = () => {

  useEffect(() => {
    FetchApi()
  }, [])

  const [Data, setData] = useState([])

  const FetchApi = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    // .then(response.json())
    // .catch((err) => console.log(err))
    let jsonData = await response.json()
    setData(jsonData)
  }

  console.log(Data)


  return (
    <>

      {/* <div className='MainCarousel'>
      <Carousel/>
    </div> */}
      <div className='Container'>
        {Data.map((product) => {
          return (
            <>
              <Link to={`/products/${product.id}`}> <div className='card'>
                <img className='image' src={product.image} alt='product' />
                <div className='details'>
                  <h6 className='title'>{product.title}</h6>
                  <h2 className='price'>$ {product.price}</h2>
                  <p className='description details'>{product.description}</p>
                </div>
              </div>
              </Link>
            </>
          )
        })}
      </div>
    </>
  )
}


export default Card