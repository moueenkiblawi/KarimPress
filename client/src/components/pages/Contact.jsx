import { Link } from 'react-router-dom'
import '../../styles/Contact.scss'
import Navbar from '../layout/Navbar'
import { FaSearchLocation,FaClock,FaPhone } from 'react-icons/fa';
import {MdEmail} from 'react-icons/md'
 import Footer from '../layout/Footer'
import { useState } from 'react';

function Contact() {

  const [submissionResult, setSubmissionResult] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmissionResult('Email sent successfully!');
        alert('Email sent successfully!');
        event.target.reset(); 
      } else {
        setSubmissionResult('Failed to send email. Please try again.');
        alert('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmissionResult('An error occurred. Please try again later.');
      alert('An error occurred. Please try again later.');
    }
  };
  
  
    
  return (
    <div className='app__contact'>
            <Navbar/>
        <div className="contact__header">
            <div className="header__text">
           
                    <h1>Contact Us</h1>
                    <p><Link to={"/"}>Home</Link>
                    <span draggable={false}>➤</span>
                    <span>Contact </span></p>
            
            </div>  
        </div>
    
        <div className="contact__detail">
  <div className="left__detail">
    <h1>Keep In Touch With Us</h1>
    <form action="http://localhost:3001/send-email" method="POST" onSubmit={handleSubmit}>
  <div className="detail__form">
    <label htmlFor="name">Name: </label>
    <input type="text" name="name" placeholder="Enter Your Name..." />
  </div>

  <div className="detail__form">
    <label htmlFor="email">Email: </label>
    <input type="email" name="email" placeholder="Enter Your Email..."  required={true}/>
  </div>

  <div className="detail__form">
    <label htmlFor="phone">Phone: </label>
    <input type="tel" name="phone" placeholder="Enter Your Phone Number..." />
  </div>

  <div className="detail__form">
    <label htmlFor="message">Message: </label>
    <textarea name="message" placeholder="Enter Your Message..."></textarea>
  </div>

  <div className="detail__button">
    <button type="submit">Submit</button>
  </div>
</form>

    {submissionResult && <p>{submissionResult}</p>}


  </div>

         
         
            <div className="right__detail">
                <h1>Contact Detail</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, et.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, praesentium.
                </h4>
                <div className="info__container">
                    <div className='info'><FaClock/>  <p>Mon-Sat 09:00-16:00</p></div>
                    <div className='info'><FaPhone/>   <p>+961 03-737-620</p></div>
                    <div className='info'><MdEmail/> <p>info@gmail.com</p>  </div>
                    <div className='info'><FaSearchLocation/> <p>Saida-Behind LIU</p>  </div>
                </div>
                
            </div>
        </div>
        <div 

className="contact__map">
  <iframe
    title="Google Maps"
    src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.3975308293625!2d35.379583225208606!3d33.56902634309245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ef199fc211271%3A0x69c5aed2f5b60b96!2sKarim%20Press!5e0!3m2!1sar!2slb!4v1698670144113!5m2!1sar!2slb"}
    style={{ border: "0", width: "100%", height: "50vh" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        <div className="contact__footer">
            <Footer/>
        </div>
    </div>
  )
}

export default Contact