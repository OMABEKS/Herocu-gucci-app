import React, { useContext , useEffect , useState} from "react";
import { List, Button} from "antd"
import { Link } from "react-router-dom";
import {
  ShoppingCartOutlined,
} from "@ant-design/icons";

import { favContext } from "../../contexts/favContext";
import { cartContext } from "../../contexts/CartContext";



const FavItem = ({ item }) => {
  const { deleteFromFav } = useContext(favContext);
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkInCart, setCheckInCart] = useState(checkItemInCart(item.id));
  useEffect(() => {
    setCheckInCart(checkItemInCart(item.id))
  })
  return (
    <List.Item
      key={item.id}
      extra={<img width={272} alt="img" src={item.item.image1} />}
    >
      <List.Item.Meta 
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3 style={{color: 'white'}}>{item.item.brand}</h3>
              <h4 style={{color: 'white'}}>{item.item.model}</h4>
            </div>
            <h3 style={{color: 'white'}}>{"$" + item.item.price}</h3>
          </div>
        }
        description={
          <>
            <div style={{color: "white" , fontSize: "18px"}}>{item.item.description}</div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "40%",
                marginTop: "20px",
              }}
            >
             
            </div>
            <Button
             onClick={() => deleteFromFav(item.item.id)}>
              Удалить из избранного
            </Button>


           
            <div style={{marginTop:"50px"}}>
                <h3 style ={{color: "white"}}>Add product to card</h3>
              
               <Button 
               onClick={() => {
                addProductToCart(item.item.id);
                setCheckInCart(checkItemInCart(item.id));
              }}
               >ДОБАВИТЬ В КОРЗИНУ </Button>
              
              </div>
            
            
          </>
        }
      />
    </List.Item>
  );
};

export default FavItem;