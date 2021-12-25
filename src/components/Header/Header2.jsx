import  React ,{useContext, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Link, useLocation } from "react-router-dom";

import { useAuth } from "../../contexts/authContext";
import { cartContext } from "../../contexts/CartContext"
import { favContext } from "../../contexts/favContext";
import "./Header.css";

import { Badge } from "antd";
import { ShoppingCartOutlined, StarOutlined } from "@ant-design/icons";

export default function ButtonAppBar() {
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
      title: "ЧАСЫ ",
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
    <div className='nav-container'>
    <Box sx={{ flexGrow: 5}}>
      
      <AppBar position="static">
        <Toolbar style={{background:"black", height:"80px", padding:"0 7 vw" }}>
        <Link to="/">
          <img
            width="200px"
            src="https://wallpaper.dog/large/5471817.jpg"
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
        
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           
          </Typography>
          <div className="header">
          <div style={{marginRight:"30px"}}>
        <Link to="/cart">
            <Badge count={+cartLength}>
              <ShoppingCartOutlined
                style={{ fontSize: "30px", cursor: "pointer", color:"white" }}
              />
            </Badge>
          </Link>
          </div>
        <div>
        <Link to="/fav">
            <Badge count={+favLength}>
              <StarOutlined
                style={{ fontSize: "30px", cursor: "pointer", color: "white" }}
              />
            </Badge>
          </Link>
          </div>
          </div>
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
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
