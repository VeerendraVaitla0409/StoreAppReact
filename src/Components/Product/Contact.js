import React, { Component } from 'react'
import SendEnquiry from './SendEnquiry'

export default class Contact extends Component {
    render() {
        return (
            <div className='container p-5'>
                <div className='row'>
                    <div className=' col-lg-6 p-5'>
                        <div className='shadow p-5'>
                            <h2 className='mb-3'>Reach Us</h2>
                            <SendEnquiry />
                        </div>
                    </div>
                    <div className=' col-lg-6 p-5'>
                        <div className='shadow p-5 h-100'>
                            <p className='text-start'> <i className="bi bi-envelope"></i> bhargavwd@gmail.com</p>
                            <p className='text-start'> <i className="bi bi-telephone"></i> +91-8885500279</p>
                            <p className='text-start'> <i className="bi bi-geo"></i> Madhapur, Hyderabad</p>
                            <br />
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.1788679744766!2d78.38389328857058!3d17.442583745863516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ed2dea4c17%3A0xd49a55db035ba737!2sElearn%20Infotech%20-%20MERN%20Java%20Python%20Fullstack%20%7C%20UI%20Development%20React%20JS%20%7C%20PHP%20Web%20Development%20UI%20UX%20Courses%20Training%20Hyderabad!5e0!3m2!1sen!2sin!4v1735060795467!5m2!1sen!2sin" title="elearn" width="100%" height={200} style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
