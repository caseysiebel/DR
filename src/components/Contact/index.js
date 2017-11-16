import React from 'react';
import './style.scss';

class Contact extends React.Component {
    render() {
        return (
            <div className='contact'>
                <h1 className='component-title'>We Would Love to Hear From You</h1>
                <form>
                    <input name='name' type='text' className='name' />
                    <input name='email' type='text' className='email' />
                    <textarea name='message' className='message' />
                    <input name='captcha' type='checkbox' className='captcha' />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Contact;
