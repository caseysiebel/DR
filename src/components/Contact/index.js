import React from 'react';
import './style.scss';

class Contact extends React.Component {
    render() {
        return (
            <div className='contact'>
                <h1 className='component-title'>We Would Love to Hear From You</h1>
                <form>
                    <input placeholder='Name' name='name' type='text' className='name' />
                    <input placeholder='E-mail' name='email' type='text' className='email' />
                    <textarea placeholder='Message...' name='message' className='message' />
                    <div className='submit-row'>
                        <div>
                            <input name='captcha' type='checkbox' className='captcha' id='captcha' />
                            <label htmlFor='captcha'>I am not a robot</label>
                        </div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Contact;
