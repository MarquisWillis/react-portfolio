import React from 'react';

export default function Contact() {
    async function submitMessage(event) {
        event.target.preventDefault();
        window.location.href = {};
    }

    return (
        <div className='container'>
            <h1>Contact</h1>
            <form>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Name"/>
                </div>

                <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
                </div>

                <div className="form-group">
                    <label for="message">Message</label>
                    <textarea className="form-control" id="message" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mb-2 d-flex"> <a href='mailto:marquiswillis99@gmail.com'>Submit Message</a> </button>
            </form>
        </div>
    );
}