import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './Contact.css'

export default function Contact() {
    return (
        <div className="contact__main">
            <Header />
            <div className="main__content container">
                <h1 class="titles">Contact Me</h1>
                <div class="card animate__animated animate__backInDown">
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <label for="InputName">Name <sup class='text-danger'>*</sup>
                                </label>
                                <input type="text" class="form-control" id="InputName"
                                    placeholder="Enter your name" required />
                            </div>
                            <div class="form-group">
                                <label for="Email1">Email address</label>
                                <input type="email" class="form-control" id="Email1"
                                    placeholder="Enter your email address" />
                            </div>
                            <div class="form-group">
                                <label for="message">Message<sup class='text-danger'>*</sup></label>
                                <textarea class="form-control" id="message"
                                    placeholder="Type your message here .." required></textarea>
                            </div>
                            <div class="d-flex justify-content-end">
                                <button type="submit" class="btn btn-primary w-lg-25">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
