import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { Carousel, Button } from "antd";
import { productsContext } from "../../contexts/productsContext";
import { Link } from "react-router-dom";

import './DetailsProduct.css'


const DetailsProduct = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct } = useContext(productsContext);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      {product ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ width: "35vw", border: "1px solid black" }}>
              <Carousel autoplay>
                <div>
                  <img width="100%" src={product.image1} alt="" />
                </div>
                <div>
                  <img width="100%" src={product.image2} alt="" />
                </div>
              </Carousel>
            </div>
            <div style={{ width: "40vw" }}>
              <h2>{product.brand}</h2>
              <h3>{product.model}</h3>
              <h2>${product.price}</h2>
              {[...Array(5)].map((star, index) => {
              index += 1;
              return (
              <button
              type="button"
              key={index}
             className={index <= (hover || rating) ? "on" : "off"}
             onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                   >
                 <span style={{fontSize:"40px"}} className="star">&#9733;</span>
               </button>
                 );
              })}
              <Link to='/checkout'>
              <Button
                size="large"
                style={{ margin: "15px 0px", width: "100%" }}
              >
                КУПИТЬ
              </Button>
              </Link>
              <Link to='/cart'>
              <Button
                size="large"
                style={{ margin: "15px 0px", width: "100%" }}
              >
                ПЕРЕЙТИ В КОРЗИНУ
              </Button>
              </Link>
              <Link to='/fav'>
              <Button
                size="large"
                style={{ margin: "15px 0px", width: "100%" }}
              >
                ПЕРЕЙТИ В ИЗБРАННОЕ
              </Button>
              </Link>
              <Link to='/addComment'>
              <Button
                size="large"
                style={{ margin: "15px 0px", width: "100%" }}
              >
                ОСТАВИТЬ ОТЗЫВ
              </Button>
              </Link>
              
              <div>{product.description}</div>
            </div>
          </div>
          <video src={product.video} width="100%" autoPlay loop muted></video>
        </>
      ) : (
        <h2>Loading...</h2>
      )}

        
       
      </div>

    
  );
};

export default DetailsProduct;
 
