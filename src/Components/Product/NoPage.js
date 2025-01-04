import React, { Component } from 'react'
import NoPageImg from '../assets/NoPageImg.gif'
import { NavLink } from 'react-router-dom'

export default class NoPage extends Component {
    render() {
        return (
            <div className='container flex-grow-1 p-5 text-center overflow-auto'>
                <NavLink to="/">
                    <img src={NoPageImg} alt='NoPage' className="img-fluid" style={{ maxHeight: '70vh', objectFit: 'contain' }} />
                </NavLink>
            </div>
        )
    }
}
