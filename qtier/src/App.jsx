import React from 'react';
import './Components/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Blog from './Components/Blog'
import Dashboard from './Components/Delivery';
import ArticlePage from './Components/ArticlePage';
import TopicPage from "./Components/TopicPage";
import Product from './Components/Product';
import Carousel from './Components/Carousel';
import Carousel_product from './Components/Carousel_product';
import Samples from './Components/Samples';
import CollectionPage from './Components/CollectionPage';

function App() {
  return (

    <Routes>
    <Route
          path="/"
          element={
            
            <Home/>
          }/>
    <Route
          path="/about"
          element={
            
            <About/>
          }/>
    <Route
          path="/products"
          element={
            
            <Product/>
          }/>
    <Route
          path="/faq"
          element={
            
            <Dashboard/>
          }/>
    <Route
          path="/contact"
          element={
            
            <Contact/>
          }/>
    <Route
          path="/journal"
          element={
            
            <Blog/>
          }/>
    <Route
          path="/samples"
          element={
            
            <Samples/>
          }/>
  
           <Route path="/article/:id" element={<ArticlePage />} />
        
  
           <Route path="/topic/:id" element={<TopicPage />} />
         
        <Route path="/collection/:id" element={<CollectionPage />} />
           <Route path="/product1" element={<Carousel />} />
           <Route path="/products/:id" element={<Carousel_product />} />
          </Routes>

  );
}

export default App;
