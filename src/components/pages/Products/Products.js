import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

let Products = () => {
  let [data, setData] = useState([]);
  let [filter, setFilter] = useState(data);

  let fetchData = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let Data = await response.json();
    setData(Data);
    setFilter(Data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterProduct = (Catgry) => {
    let filterdList = data.filter((items) => items.category === Catgry);
    setFilter(filterdList);
  };

  return (
    <>
      <div className="container">
        <div className="ButtonContainer">
          <button className="Buttons" onClick={() => setFilter(data)}>
            {" "}
            All{" "}
          </button>
          <button
            className="Buttons"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's clothing
          </button>
          <button
            className="Buttons"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's clothing
          </button>
          <button className="Buttons" onClick={() => filterProduct("jewelery")}>
            Jwellery
          </button>
          <button
            className="Buttons"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>
        <div className="cardContainer">
          {filter.map((product) => {
            return (
              <>
                <div className="productsCard">
                  <img src={product.image} height={140} alt="product" /><hr></hr>
                  <h5>{product.title.substring(0, 22)}...</h5>
                  <h4>$ {product.price}</h4>
                  <Link to={`/products/${product.id}`}>
                    {" "}
                    <button className="buyBtn">View</button>{" "}
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
