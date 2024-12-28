import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './Product/Products'

const Routing = ({ handleAddToCart }) => {
    return (
        <Routes>
             <Route path="/" element={<Products handleAddToCart={handleAddToCart} />} />
        </Routes>
    )
}

export default Routing
