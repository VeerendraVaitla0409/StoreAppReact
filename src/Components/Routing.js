import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './Product/Products'
import Lifestyle from './Product/Lifestyle'
import About from './Product/About'
import Contact from './Product/Contact'
import NoPage from './Product/NoPage'

const Routing = ({ handleAddToCart }) => {
    return (
        <Routes>
            <Route path="/" element={<Products handleAddToCart={handleAddToCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/lifestyle" element={<Lifestyle handleAddToCart={handleAddToCart} />} />
            <Route path='*' Component={<NoPage />} />
        </Routes>
    )
}

export default Routing
