import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { Carousel, Button } from "antd";
import { productsContext } from "../../contexts/productsContext";
import { Link } from "react-router-dom";
import { Rate } from "antd";
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
            <div style={{ width: "35vw", border: "3px solid black" }}>
              <Carousel autoplay>
                <div>
                  <img width="100%" src={product.image1} alt="" />
                </div>
                <div>
                  <img width="100%" src={product.image2} alt="" />
                </div>
              </Carousel>
            </div>
            <div style={{ width: "40vw"}}>
              <h2>{product.brand}</h2>
              <h3>{product.model}</h3>
              <h2>${product.price}</h2>

              {/* РЕЙТИНГ */}
              <Rate allowHalf defaultValue={4.5} />
              <Rate style={{display:"flex", justifyContent:"center", flexWrap:"nowrap", fontSize:"50px"}} />
               {/* РЕЙТИНГ */}

              <Link to='/checkout'>
              <Button
                size="large"
                style={{ margin: "15px 0px", width: "100%" , backgroundColor:"#04AA6D" , color:"white"}}
              >
                КУПИТЬ
              </Button>
              </Link>
              <Link to='/cart'>
              <Button
                size="large"
                style={{ margin: "15px 0px", width: "100%", backgroundColor:"#04AA6D" , color:"white"}}
              >
                ПЕРЕЙТИ В КОРЗИНУ
              </Button>
              </Link>
              <Link to='/fav'>
              <Button
                size="large"
                style={{ margin: "15px 0px", width: "100%" , backgroundColor:"#04AA6D", color:"white" }}
              >
                ПЕРЕЙТИ В ИЗБРАННОЕ
              </Button>
              </Link>
              <Link to='/app2'>
              <Button
                size="large"
                style={{ margin: "15px 0px", width: "100%" , backgroundColor:"#04AA6D", color:"white" }}
              >
                ОСТАВИТЬ ОТЗЫВ
              </Button>
              </Link>
              
              <div style={{color:"black", fontSize:"18px"}}>{product.description}</div>
            </div>
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}

        
       
      </div>

    
  );
};

export default DetailsProduct;
 
