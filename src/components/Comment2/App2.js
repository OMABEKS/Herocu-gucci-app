import React, { useContext, useEffect, useState } from "react";
import CommentList from "../Comments/CommentList";
import { productsContext } from "../../contexts/productsContext";
import { useParams } from "react-router";

const App2 = () => {
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

        <div>
             {product ? (
                  <CommentList id={product.id}/>
             ): (
                <h2>Loading...</h2>
             )}
           
        </div>
    );
};

export default App2;