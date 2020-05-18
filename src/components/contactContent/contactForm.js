
import React, { Component } from 'react';
import './contactForm.css'

class ContactForm extends Component {
    render() {
        return (
            <div>
                <div className="container-contact">
                    <div className="wrap-contact">
                        <form className="contact-form validate-form">
                            <span className="contact-form-title">
                                Send Us A Message
                                </span>

                            <div className="wrap-input validate-input" data-validate="Please enter your name">
                                <input className="input" type="text" name="name" placeholder="Full Name" />
                                <span className="focus-input"/>
                            </div>

                            <div className="wrap-input validate-input" data-validate="Please enter your email: e@a.x">
                                <input className="input" type="text" name="email" placeholder="E-mail" />
                                <span className="focus-input"/>
                            </div>

                            <div className="wrap-input validate-input" data-validate="Please enter your phone">
                                <input className="input" type="text" name="phone" placeholder="Phone" />
                                <span className="focus-input"/>
                            </div>

                            <div className="wrap-input validate-input" data-validate="Please enter your message">
                                <textarea className="input" name="message" placeholder="Your Message"/>
                                <span className="focus-input"/>
                            </div>

                            <div className="container-contact-form-btn">
                                <button className="contact-form-btn">
                                    <span>
                                        Send
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm

