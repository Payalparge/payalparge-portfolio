import React from 'react'

const ContactForm = () => {
  return (
    <div className='contact-form'>
        <form>
            <div className='name-container'>
                <input type='text' name='firstname' placeholder='FirstName'/>
                <input type='text' name='lastname' placeholder='LastName'/>
            </div>
            <input type='text' name='email' placeholder='Email'/>
            <textarea type='text' name='message' placeholder='Message'/>
            <button>SEND</button>
        </form>
      
    </div>
  )
}

export default ContactForm
