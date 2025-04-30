import React from 'react'

const Mobilenav = ({isOpen, toggelMenu}) => {
  return (
   <>
   <div
   className={`mobile-menu ${isOpen ? "active" : " "}`}
onClick={toggelMenu}>

    <div  className='mobile-menu-container'>
        <img className='logo' src="./assest/logo.jpg" alt='shivilogo' />

        <ul>
            <li>
                <a className='menu-item' href='/'>Home</a>
            </li>
            <li>
                <a className='menu-item' href='/skills'>Skills</a>
            </li> 
             <li>
                <a className='menu-item' href='/projects'>Projects</a>
            </li> 
             <li>
                <a className='menu-item' href='/contact'>Contact</a>
            </li> 
            <button
            className='contact-btn' onClick={()=>{}} >
Hire Me
            </button>
        </ul>
    </div>
   </div>
   </>
  )
}

export default Mobilenav
