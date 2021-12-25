import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/authContext";
import ProductsContextProvider from "./contexts/productsContext";
import BrandsContextProvider from "./contexts/brandsContext";
import CartContextProvider from "./contexts/CartContext";
import FavContextProvider from "./contexts/favContext";
import CommentContextProvider from "./contexts/commentsContext";

import Footer from "./components/Footer/Footer";
import Header2 from "./components/Header/Header2";

import Routing from "./Routing";

import "antd/dist/antd.css";
import "./App.css";

const App = () => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
      <CommentContextProvider>
      <FavContextProvider>
      <BrandsContextProvider>
        <ProductsContextProvider>
          <BrowserRouter>
            {/* <Header /> */}
            <Header2/>
            <Routing />
            <Footer />
          </BrowserRouter>
        </ProductsContextProvider>
      </BrandsContextProvider>
      </FavContextProvider>
      </CommentContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
};

export default App;


