import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import cart from '../Components/Product/assets/cart.png'
import logo from '../Components/Product/assets/logo.png'

const Header = ({ cartCount }) => {

    const location = useLocation();

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <div className="logo-container">
                            <img src={logo} className="logo" alt="logo" />
                            <h5 className="text-white fw-bold brand-text">
                                Buy<span className="text-danger fw-bold">Sphere</span>
                            </h5>
                        </div></NavLink>
                    <button className="navbar-toggler d-lg-none" type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                                    aria-current={location.pathname === '/' ? 'page' : undefined}
                                    to="/"><span className='text-white fw-bold'>Home</span>
                                </NavLink >
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#"><span className='text-danger fw-bold'>About</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#"><span className='text-white fw-bold'>Contact</span></NavLink >
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#"><img src={cart} alt='cart icon' className="cart-icon" />
                                    {cartCount > 0 && (
                                        <span className="badge bg-danger">{cartCount}</span>
                                    )}
                                </NavLink >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header
