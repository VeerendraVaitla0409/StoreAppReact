import React, { useState } from 'react'
import productList from './ProductList';
import { NavLink } from 'react-router-dom';
import '../Product/css/style.product.css'

const Products = ({ handleAddToCart }) => {

    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedDescription, setExpandedDescription] = useState({});

    const filteredProducts = productList.filter(product => {
        // Filter by category
        const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;

        // Filter by search term (case-insensitive)
        const searchTermMatch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());

        return categoryMatch && searchTermMatch;
    });

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;
        return '⭐'.repeat(fullStars) + '🌗'.repeat(halfStar) + '☆'.repeat(emptyStars);
    };

    const toggleDescription = (productId) => {
        setExpandedDescription((prev) => ({
            ...prev,
            [productId]: !prev[productId],  // Toggle the expanded state for the given product
        }));
    };

    return (
        <div className="container mt-3">
            <nav className="navbar navbar-expand-lg navbar-light bg-opacity-20 rounded-3 border border-light navSearch">
                <div className="container-fluid">
                    <ul className="navbar-nav w-100 text-start p-0">
                        <li className="nav-item me-3">
                            <NavLink className="nav-link fw-semibold" to="#" onClick={() => setSelectedCategory('all')}>All</NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink className="nav-link fw-semibold" to="#" onClick={() => setSelectedCategory("men's clothing")}>Men's Clothing</NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink className="nav-link fw-semibold" to="#" onClick={() => setSelectedCategory('jewelery')}>Jewelry</NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink className="nav-link fw-semibold" to="#" onClick={() => setSelectedCategory('electronics')}>Electronics</NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink className="nav-link fw-semibold" to="#" onClick={() => setSelectedCategory("women's clothing")}>Women's Clothing</NavLink>
                        </li>
                    </ul>

                    <form className="d-flex ms-5">
                        <input
                            className="form-control-lg me-2 border border-light rounded-3"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </form>
                </div>
            </nav>

            {/* Product Cards */}
            <div className="row mt-4">
                {filteredProducts.map(product => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card shadow-lg border-light rounded-lg productImgDiv">
                            <img
                                src={product.image}
                                className="card-img-top img-fluid rounded-top productImg"
                                alt={product.title}
                            />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <h5 className="card-title text-primary">{product.title}</h5>
                                <p className="card-text text-muted">
                                    {expandedDescription[product.id]
                                        ? product.description // Show full description if expanded
                                        : `${product.description.substring(0, 100)}...`}
                                    <NavLink to="#" className="more-desc" onClick={() => toggleDescription(product.id)}>
                                        {expandedDescription[product.id] ? ' Show Less' : ' More'}
                                    </NavLink>
                                </p>


                                <div className="d-flex align-items-center">
                                    <span className="text-warning product-rating">
                                        {renderStars(product.rating.rate)}
                                    </span>
                                    <span className="ms-2 product-count">
                                        ({product.rating.count} reviews)
                                    </span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center  mt-auto">
                                    <h5 className="text-danger product-price">${product.price}</h5>
                                    <button className="btn btn-danger px-4 py-2 w-auto add-cart" onClick={handleAddToCart}>
                                        <span className='text-white fw-bold'> Add to Cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products
