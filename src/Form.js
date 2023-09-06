import React from 'react'

function Form() {
  return (
    <div>
        <form className='container'>
            <h2>Contact Us Form</h2>
            <div className='input-field'>
                <input type='text' required/>
                <label>Full Name</label>
            </div>
            <div className='input-field'>
                <input type='email' required/>
                <label>Email Id</label>
            </div>
            <div className='input-field'>
                <input type='text' required/>
                <label>Phone No</label>
            </div>
            <div className='text-area-field'>
                <textarea type='text' required rows='3'></textarea>
                <label>Message</label>
            </div>
           <button className='submit-button'>Submit</button>

        </form>
   </div>
  )
}

export default Form