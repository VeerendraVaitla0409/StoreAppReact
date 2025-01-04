import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import team1 from '../assets/team/team1.avif'
import team2 from '../assets/team/team2.avif'
import team3 from '../assets/team/team3.avif'
import team4 from '../assets/team/team4.avif'
import '../Product/css/style.product.css';
import aboutImg from '../assets/aboutImg.jpg'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="bg-light text-dark rounded-3 border border-light text-center py-5 mt-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    <div className='container'>
                        <h1 className="display-4">Who We Are</h1>
                        <p className="lead">Your Trusted E Commerce Partner</p>
                    </div>
                </section>

                <section className="py-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h2>Welcome to BuySphere</h2>
                                <p>We are committed to providing high-quality, eco-friendly products that you'll love. Founded in 2010, our goal is simple: to offer stylish, sustainable choices for the conscious consumer.
                                </p>
                            </div>
                            <div className="col-md-6 text-center">
                                <img src={aboutImg} class="w-50 rounded aboutImg ml-4" alt="About Us" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='bg-light py-5'>
                    <div className='container text-center'>
                        <h2>Our Mission</h2>
                        <p className='mt-3'><strong>Mission:</strong> Our mission is to provide premium, ethically-sourced products while promoting sustainability in every step of our process.</p>
                        <p><strong>Our Story:</strong> What started as a small idea in a local market has now grown into a global brand, serving thousands of eco-conscious customers.</p>
                    </div>
                </section>

                <section className=' py-5'>
                    <div className='container'>
                        <h2 className='text-center'>What Makes Us Unique?</h2>
                        <div className='row mt-3'>
                            <div className='col-md-3'>
                                <div className='text-center p-3 border rounded'>
                                    <i className="bi bi-globe2 display-4 text-primary"></i>
                                    <p>100% eco-friendly products</p>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='text-center p-3 border rounded'>
                                    <i className='bi bi-box-seam-fill display-4 text-success'></i>
                                    <p>Sustainable packaging</p>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='text-center p-3 border rounded'>
                                    <i className='bi bi-tree-fill display-4 text-warning'></i>
                                    <p>We plant a tree for every purchase</p>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='text-center p-3 border rounded'>
                                    <i className='bi bi-award-fill display-4 text-info'></i>
                                    <p>Commitment to fair trade and ethical practices</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='bg-light py-5'>
                    <div className='container'>
                        <h2 className='text-center'>Meet the Team</h2>
                        <div className='row mt-4'>
                            <div className='col-md-3 text-center'>
                                <img src={team1} className='img-fluid rounded-circle team-member' alt='Team Member' />
                                <h5 className='mt-2'>John Doe</h5>
                                <p>Founder & CEO</p>
                            </div>
                            <div className='col-md-3 text-center'>
                                <img src={team2} className='img-fluid rounded-circle team-member' alt='Team Member' />
                                <h5 className='mt-2'>Jane Smith</h5>
                                <p>Travel Consultant</p>
                            </div>
                            <div className='col-md-3 text-center'>
                                <img src={team3} className='img-fluid rounded-circle team-member' alt='Team Member' />
                                <h5 className='mt-2'>Michael Brown</h5>
                                <p>Operations Manager</p>
                            </div>
                            <div className='col-md-3 text-center'>
                                <img src={team4} className='img-fluid rounded-circle team-member' alt='Team Member' />
                                <h5 className='mt-2'>Emily Devis</h5>
                                <p>Marketing Head</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='text-center bg-primary text-white py-5'>
                    <div className='container'>
                        <h2>Start Shopping with Us Today!</h2>
                        <p className='mt-3'>Explore our collections and join the movement for sustainable, stylish fashion.</p>
                        <NavLink to='/' className='btn btn-light btn-lg'>Shop Now</NavLink>
                    </div>
                </section>


            </div>
        )
    }
}
