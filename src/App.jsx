import React from 'react';
import ProductContextProvider from './context/ProductContextProvider';
import Home from './components/Home';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";  
import { GlobalStyle } from "./GlobalStyle.style";
import ProductItem from './components/ProductItem';
import Navbar from './components/Navbar';
import Loading from './Loading';
function App() {

  


  return (
    <Router>
      <GlobalStyle/>
        <ProductContextProvider>
          <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductItem/>} />
        <Route path="/load" element={<Loading/>} />
        </Routes>
    </ProductContextProvider>
    </Router>
  )
}

export default App
