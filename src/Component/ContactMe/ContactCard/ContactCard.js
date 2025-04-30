import React from 'react'

const ContactCard = ({iconUrl, text}) => {
  return (
    <div className='contact-card'>
      <div className='icon'>
        <img src={iconUrl} alt={text}/>
      </div>
    </div>
  )
}

export default ContactCard
