import React from 'react'
import Counter from '../layout/ServicePage/Counter'
import Navbar from '../layout/Navbar'
import { Link } from 'react-router-dom'
import '../../styles/Services.scss'
import Footer from '../layout/Footer'
import ServiceCards from '../layout/ServicePage/ServiceCards'
import ServiceFeature from '../layout/ServicePage/ServiceFeature'
import { services } from '../../Data/dummy'
function Services() {
  return (
    <div className='app-service'>
      <Navbar/>
      <div className="service__header">
      <div className="header__text">
            <h1>Services</h1>
            <p><Link to={"/"}>Home</Link>
            <span draggable={false}>➤</span>
            <span>Services </span></p>
            </div>  
      </div>
      
      <div className="card">
        <ServiceCards data={services}/>
      </div>


      <div className="counter__service">
      <Counter/>
      </div>
       
       <div className="service__feature">
        <ServiceFeature/>
       </div>

       <Footer/>
    </div>
  )
}

export default Services