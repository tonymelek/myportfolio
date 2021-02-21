import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './Contact.css'
import axios from 'axios'

export default function Contact() {
    const [response, setResponse] = useState('')
    const [text, setText] = useState('Submit')
    const handleSubmit = e => {
        e.preventDefault();
        setText('Sending...');
        const sender_name = e.target.sender_name.value;
        const sender_email = e.target.sender_email.value
        const sender_message = e.target.sender_message.value
        axios({
            method: 'post',
            url: 'https://37fr3l0ug9.execute-api.ap-southeast-2.amazonaws.com/emailer',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                sender_name, sender_email, sender_message
            }

        }).then(res => {
            setResponse('Thank you, Message has been e-mailed to Tony')
        })
            .catch(err => setResponse(err.response.data))

    }

    return (
        <div className="contact__main">
            <Header />
            <div className="main__content container">
                <h1 className="titles">Contact Me</h1>
                <div className="card animate__animated animate__backInDown">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label for="InputName">Name <sup className='text-danger'>*</sup>
                                </label>
                                <input type="text" name="sender_name" className="form-control" id="InputName"
                                    placeholder="Enter your name" required />
                            </div>
                            <div className="form-group">
                                <label for="Email1">Email address</label>
                                <input type="email" name="sender_email" className="form-control" id="Email1"
                                    placeholder="Enter your email address" />
                            </div>
                            <div className="form-group">
                                <label for="message">Message<sup className='text-danger'>*</sup></label>
                                <textarea className="form-control" id="message" name="sender_message"
                                    placeholder="Type your message here .." required></textarea>
                            </div>
                            <div className="d-flex justify-content-end">
                                {response === '' &&
                                    <button type="submit" className="btn btn-primary w-lg-25" disabled={text === 'Sending...'} >{text}</button>}
                                {response !== '' &&
                                    <h5 className="text-success">{response}</h5>}

                            </div>
                        </form>

                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}