import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { Badge } from "antd";
import { ShoppingCartOutlined, StarOutlined } from "@ant-design/icons";

import { useAuth } from "../../contexts/authContext";
import { cartContext } from "../../contexts/CartContext"
import { favContext } from "../../contexts/favContext";

import "./Header.css";

const Header = () => {

  const location = useLocation();
  const {
    handleLogout,
    user: { email },
  } = useAuth();

  // КОРЗИНКА 
  const { getCart, cartLength } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
 
  // ИЗБРАННОЕ 
  const {getFav , favLength} = useContext(favContext)
  useEffect(()=>{
    getFav()
  }, []);

  const NAV_ITEMS = [
    {
      title: "BRANDS",
      link: "/brands",
      id: 1,
    },
    {
      title: "ОДЕЖДА",
      link: "/products",
      id: 2,
    },
    {
      title: "ЧАСЫ И УКРАШЕНИЯ",
      link: "/watches",
      id: 4,
    },
    {
      title: "ПОКАЗЫ",
      link: "/show",
      id: 5,
    },
  ];
  return (
    <>
      <nav>
      <Link to="/">
          <img
            width="200px"
            src="https://www.pacificplace.com.hk/-/media/Images/PacificPlace2/Shops/Logo/gucci-logo.ashx?rev=1bc9d678b3bb4535a7c6c7ba622a4c43"
            alt=""
          />
        </Link>
      {NAV_ITEMS.map((item) => (
          <Link
            to={item.link}
            className={
              location.pathname === item.link
                ? "navbar__item-active"
                : "navbar__item"
            }
          >
            {item.title}
          </Link>
        ))}

        {email === "makers23@gmail.com" ? (
          <Link
            className={
              location.pathname === "/admin"
                ? "navbar__item-active"
                : "navbar__item"
            }
            to="/admin"
          >
            ADMIN
          </Link>
        ) : null}
        
        
      </nav>
     
      <div className="navbar">
      <div>
          {email ? (
            <Link to="/auth">
              <button className="sign-btn" onClick={handleLogout}>
                ВЫЙТИ
              </button>
            </Link>
          ) : null}

          {email ? null : (
            <Link to="/auth">
              <button className="sign-btn">ВОЙТИ</button>
            
            </Link>
          )}
        </div>
       
      </div>
      
      <div className="header">
        <div></div>
       
        <div>
        <Link to="/cart">
            <Badge count={+cartLength}>
              <ShoppingCartOutlined
                style={{ fontSize: "30px", cursor: "pointer" }}
              />
            </Badge>
          </Link>
        </div>
        <div>
        <Link to="/fav">
            <Badge count={+favLength}>
              <StarOutlined
                style={{ fontSize: "30px", cursor: "pointer", color: "black" }}
              />
            </Badge>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;