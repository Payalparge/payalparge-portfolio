import React from 'react'
import ContactCard from './ContactCard/ContactCard'
import ContactForm from './ContactForm/ContactForm'
import email from '../../assets/email.png'
import github from '../../assets/ithub.png'

const Contact = () => {
  return (
<section className='contact-container'>
<h5 className='contact-heading'>Contact Me</h5>
<div className='contact-content'>
    <div style={{flex:1}}>
        <ContactCard
        iconUrl={email}
        text="shivimukati@74gmail.com"
        />
         <ContactCard
        iconUrl={github}
        text="https://github.com/1shivanipatel"
        />
    </div>
    <div style={{flex:1}}>
        <ContactForm/>
    </div>
</div>
</section>
  )
}

export default Contact
