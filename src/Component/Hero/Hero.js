import React from 'react';
import shiviImage from '../../assets/shivi.png';
import Html from '../../assets/1051277.png';
import Css from '../../assets/Css.png';
import Javascript from '../../assets/js.png';
import react from '../../assets/react.png';
// import Node from '../../assets/node.png';       // Node.js ke liye ye bhi hata diya (agar image missing ho toh)
 // import Mongodb from '../../assets/mongodb.png'; // MongoDB ke liye bhi hata diya
// import python from '../../assets/phython.png';   // Ye hata diya (image missing error aata hai)
import sql from '../../assets/Sql.png';

const Hero = () => {
  return (
    <section className='hero-container'>
      <div className='hero-content'>
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas into Reality Seamless and Visually Stunning Web Solution
        </p>
      </div>

      <div className='hero-img'>
        <div>
          <div className='tech-icon1'>
            <img src={shiviImage} alt='shivi' />
          </div>

          <div className='tech-icon2'>
            {/* HTML */}
            <div className='tech-icon'>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                <img src={Html} alt='htmllogo' />
              </a>
            </div>

            {/* CSS */}
            <div className='tech-icon'>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                <img src={Css} alt='csslogo' />
              </a>
            </div>

            {/* JavaScript */}
            <div className='tech-icon'>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                <img src={Javascript} alt='jslogo' />
              </a>
            </div>

            {/* React */}
            <div className='tech-icon'>
              <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">
                <img src={react} alt='reactlogo' />
              </a>
            </div>

            {/* Python hata diya kyunki image missing thi */}

            {/* SQL */}
            <div className='tech-icon'>
              <a href="https://www.w3schools.com/sql/" target="_blank" rel="noopener noreferrer">
                <img src={sql} alt='sqllogo' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

