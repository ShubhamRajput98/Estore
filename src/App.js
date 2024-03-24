import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import { ErrorPage } from "./pages/ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";

const App = () => {
  const theme = {
    colors: {
      bg: "#f8f8f8",
      footer_bg: "#020231",
      btn: "blue",
      header: "blue",
      white: "white",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleproducts/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
