import React from 'react'
import '../../styles/Footer.scss'
import { FaFacebook,FaInstagram,FaWhatsapp,FaSearchLocation,FaClock,FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer'>
    <div className='sb_footer section_padding'>
    <div className='sb_footer-links'>
    <div className='sb_footer-links-div'>

        <h2>K'PRESS</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, omnis.</p>
       
    </div>

    <div className='sb_footer-links-div'>
        <h4>OFFICE INFO:</h4>
        <div className='info'><FaClock/>  <p>Mon-Sat 09:00-16:00</p></div>
                    <div className='info'><FaPhone/>   <p>+961 03-737-620</p></div>
                    <div className='info'><MdEmail/> <p>info@gmail.com</p>  </div>
                    <div className='info'><FaSearchLocation/> <p>Saida</p>  </div>
    </div>
    <div className='sb_footer-links-div'>
        <h4>QUICK LINKS:</h4>
        <div className='links'>
        <a href="/#"><span> ✹ </span><>Home</></a>
        <a href="/#"><span>✹</span><>Contact</></a>
        
       <a href="/#"><span>✹</span><>Services</></a>
        <a href="/#"><span>✹</span><>About </></a></div>
    </div>

    <div className='sb_footer-links-div'>
        <h4 style={{width:"150px"}}>Connect With Us:</h4>
        <div className='social-media'>
        <a href="/#" className='icon'><FaFacebook/></a>
        <a href="/#" className='icon'><FaInstagram/></a>
        <a href="/" className='icon'><FaWhatsapp/></a>
        <a href="/" className='icon'><MdEmail/></a>

    </div>
    </div>
</div>

    <div className='sb_footer-below'>
        <div className='sb_footer-copyright'>
            <p>
                @{new Date().getFullYear()} CodeInn. All right reserved.
            </p>
        </div>

        <div className='sb_footer-below-links'>
         <a href='/home'> <div><p>Terms & Condition</p></div></a> 
         <a href='/home'> <div><p>Privacy</p></div></a> 
         <a href='/home'> <div><p>Secuirty</p></div></a> 
         <a href='/home'> <div><p>Cookie Declaration</p></div></a> 
        </div>
    </div>
    
</div>
</div>

  )
}

export default Footer