import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Auth from "./components/Auth/Auth";
import BrandsList from "./components/BrandsList/BrandsList";
import DetailsProduct from "./components/DetailsProduct/DetailsProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import Home from "./components/Home/Home";
import ProductsList from "./components/ProductsList/ProductsList";
import { useAuth } from "./contexts/authContext";
import AdminPage from "./pages/AdminPage";
import Error404 from "./pages/Error404";
import Cart from "./components/Cart/Cart";
import Fav from "./components/Favourites/Fav";
import Checkout from "./components/CreditCart/Checkout";
import CreditCart from "./components/CreditCart/CreditCart";
import AddComment from "./components/Comments/AddComment";
import Watches from "./components/Watches/Watches";
import Show from "./components/Show/Show";

const Routing = () => {
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/products",
      element: <ProductsList />,
      id: 2,
    },
    {
      link: "/auth",
      element: <Auth />,
      id: 3,
    },
    {
      link: "/brands",
      element: <BrandsList />,
      id: 4,
    },
    {
      link: "/products/:id",
      element: <DetailsProduct />,
      id: 5,
    },
    {
      link:"/cart",
      element: <Cart/>,
      id: 6
    },
    {
      link:"/fav",
      element:<Fav/>,
      id:7

    },
    {
      link:'/checkout',
      element:<Checkout/>,
      id:8
    },
    {
      link:"/creditCart",
      element:<CreditCart/>,
      id:9

    },
    {
      link:"/addComment",
      element:<AddComment/>,
      id:10

    },
    {
      link:"/watches",
      element:<Watches/>,
      id:11
    },
    {
      link:"/show",
      element:<Show/>

    }

  ];
  const ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 2,
    },
  ];
  const { user } = useAuth();
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} />
      ))}
      { user ? ADMIN_ROUTES.map((item) => (
        <Route
          path={item.link}
          element={
            user.email === "makers23@gmail.com" ? (
              item.element
            ) : (
              <Navigate replace to="*" />
            )
          }
        />
      )): null}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Routing;