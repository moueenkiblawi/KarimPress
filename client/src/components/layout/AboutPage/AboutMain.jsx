import React from 'react'
import '../../../styles/AboutHero.scss'
import '../../../styles/AboutMain.scss'
// import { FaFacebook,FaInstagram,FaWhatsapp } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';

function AboutMain({data}) {
 
  const heroData = data[0];

  return (
    <div className='aboutMain'>
            <div className="aboutHero__container">

                   

                    <div className="right__aboutHero">

                        <div className="right__aboutHero__text">
                            <h1>{heroData.title}</h1>
                            <p>{heroData.desc}</p>

                            <div className="aboutHero-btn">
                                        <button>  
                                                Contact Us      </button>
                                </div>

                             {/* <div className="aboutHero__icon">
                                <div className='social-media'>
                                        <a href="/#" className='icon'><FaFacebook/></a>
                                        <a href="/" className='icon'><FaInstagram/></a>
                                        <a href="/" className='icon'><FaWhatsapp/></a>
                                        <a href="/" className='icon'><MdEmail/></a>

                                 </div>
                             </div> */}

                           
                      <div/>
                      
                     
                                
                        </div>

                    </div>

                    <div className="left__aboutHero">
                    
                    <img src={heroData.image} alt="" draggable={false} />
            
                </div>
            </div>
    </div>    
  )
}
export default AboutMain