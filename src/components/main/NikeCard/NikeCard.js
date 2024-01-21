import React, { useState } from "react";
import data from "./Data";
import ScrollComp from "../ScrollComp/ScrollComp";
import "./NikeCard.css";

const NikeCard = () => {
  const [selectedImages, setSelectedImages] = useState(
    data.map((product) => product.images[0])
  );

  const setNewImage = (index, link) => {
    setSelectedImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] = link;
      return newImages;
    });
  };

  return (
    <>
      <div className="mainContainer">
        {data.map((products, index) => {
          return (
            <div key={index} id="card-container">
              <div id="upperPart">
                <img
                  className="main-image"
                  src={selectedImages[index]}
                  height={100}
                  alt="Main"
                />
              </div>
              <div id="lowerPart">
                <div id="writtenPart">
                  <h4 className="heavyText">{products.title}</h4>
                  <span>
                    {" "}
                    <h6 className="heavyText">
                      MRP{" "}
                      <span>
                        {" "}
                        <h4 style={{ color: "green" }}> ₹ {products.price}</h4>
                      </span>
                    </h6>
                  </span>
                  <p className="simpleText">
                    {products.description.substring(0, 42)}...
                  </p>
                </div>
                <div id="extraImagesPart">
                  <div className="sImagesContainer">
                    {products.images.map((image, i) => (
                      <div key={i} className="sImages">
                        <img
                          src={image}
                          height={45}
                          alt={`Thumbnail ${i}`}
                          onMouseOver={() => setNewImage(index, image)}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="price">
                    <h2 className="heavyText">MRP {products.price}</h2>
                  </div>
                  <p className="simpleText">
                    {products.description.substring(0, 42)}...
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ScrollComp />
    </>
  );
};

export default NikeCard;
