import React, { Component } from 'react'
import '../Product/css/style.product.css';

export default class SendEnquiry extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            mobile: '',
            email: '',
            message: '',
            formSubmitted: false
        }

        // Refs for input fields
        this.usernameRef = React.createRef();
        this.mobileRef = React.createRef();
        this.emailRef = React.createRef();
        this.messageRef = React.createRef();
    }

    changeData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    resetForm = () => {
        this.setState({
            username: '',
            mobile: '',
            email: '',
            message: '',
            formSubmitted: false,
            nameError: "",
            mobileError: "",
            emailError: "",
            messageError: ""
        });
    };

    submitHandler = (e) => {
        e.preventDefault();

        const { username, mobile, email, message } = this.state;
        let formValid = true; // Flag to check if form is valid

        const alphaExp = /^[A-Za-z\s]+$/;
        const mobileExp = /^(?:\(\d{3}\)\s?|\d{3}[-.\s]?)\d{3}[-.\s]?\d{4}$/;
        const emailExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

        const nameError = document.getElementById("nameError");
        const mobileError = document.getElementById("mobileError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");

        // Clear all error messages initially
        this.setState({
            nameError: "",
            mobileError: "",
            emailError: "",
            messageError: ""
        });

        if (username === "") {
            nameError.textContent = "Please enter Name";
            formValid = false;
            this.usernameRef.current.focus();
        } else if (!username.match(alphaExp)) {
            nameError.textContent = "Please enter Name which contains Alphabets";
            this.usernameRef.current.focus();
            formValid = false;
        } else {
            nameError.textContent = "";
        }

        if (mobile === "") {
            mobileError.textContent = "Please Enter Mobile No";
            this.mobileRef.current.focus();
            formValid = false;
        } else if (mobile.length !== 10) {
            mobileError.textContent = "Please Enter 10 digit Mobile No";
            this.mobileRef.current.focus();
            formValid = false;
        }
        else if (!mobile.match(mobileExp)) {
            mobileError.textContent = "Please enter valid Mobile No";
            this.mobileRef.current.focus();
            formValid = false;
        } else {
            mobileError.textContent = "";
        }

        if (mobile === "") {
            emailError.textContent = "Please Enter Email";
            this.emailRef.current.focus();
            formValid = false;
        }
        else if (!email.match(emailExp)) {
            emailError.textContent = "Please enter valid Email Id";
            this.emailRef.current.focus();
            formValid = false;
        } else {
            emailError.textContent = "";
        }

        if (message === "") {
            messageError.textContent = "Please enter Message";
            this.messageRef.current.focus();
            formValid = false;
        } else if (message.length < 50) {
            messageError.textContent = "Please enter Message atleast 50 characters";
            this.messageRef.current.focus();
            formValid = false;
        } else {
            messageError.textContent = "";
        }

        if (formValid) {
            this.setState({ formSubmitted: true });
            setTimeout(() => {
                this.resetForm();
            }, 1000);
        }
    }


    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type='text' name='username' placeholder='Enter Name' onChange={this.changeData} value={this.state.username} className=' form-control mb-3' ref={this.usernameRef} />
                    <p id="nameError"></p>
                    <input type='text' name='mobile' placeholder='Mobile Number' onChange={this.changeData} value={this.state.mobile} className=' form-control mb-3' ref={this.mobileRef} />
                    <p id="mobileError"></p>
                    <input type='text' name='email' placeholder='Email Address' onChange={this.changeData} value={this.state.email} className=' form-control mb-3' ref={this.emailRef} />
                    <p id="emailError"></p>
                    <textarea className="form-control mb-3" value={this.state.message} id="message" name='message' rows="4" placeholder="Write your message" ref={this.messageRef} onChange={this.changeData}></textarea>
                    <p id="messageError"></p>
                    <input type='submit' className=' form-control mb-3 btn btn-success' />
                </form>
                {this.state.formSubmitted && (
                    <div className="alert alert-success mt-3">Form submitted successfully!</div>
                )}
            </div>
        )
    }
}
