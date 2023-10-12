import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <form className="contact-form" data-netlify="true" name="contact">
                <input type="hidden" name="form-name" value="contact" />
                <div className="input-group">
                    <label>
                        Name<span>*</span>
                        <input type="text" placeholder="Name..." required />
                    </label>
                    <p className="input-error">Name is required!</p>
                </div>
                <div className="input-group">
                    <label>
                        Email<span>*</span>
                        <input type="email" placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                    </label>
                    <p className="input-error">Please enter a valid email address!</p>
                </div>
                <div className="input-group">
                    <label>
                        Message
                        <textarea placeholder="message" required></textarea>
                    </label>
                    <p className="input-error">Message is required!</p>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;