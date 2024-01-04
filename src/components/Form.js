import './FormStyle.css';
import React from 'react'

const Form = () => {
    return (
        <div className='form'>
            <label>Name</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='email'></input>
            <label>Subject</label>
            <input type='text'></input>
            <label>Message</label>
            <textarea rows="7"  placeholder='Type Your Message' type='text'/>
            <button className='btn'>Submit</button>
        </div>

    )
}

export default Form