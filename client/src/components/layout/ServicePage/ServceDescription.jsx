import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import '../../../styles/ServiceDescription.scss'
import Footer from '../Footer';
import SubServices from './SubServices';



function ServiceDescription({ data }) {
  const { title } = useParams();
  const selectedService = data.find(service => service.title.toLowerCase().replace(/\s+/g, '-') === title);

  if (!selectedService) {
    return <div>Service not found</div>;
  }

  return (
    <div className="serviceDescription">

   
    <div className='app-service'>
    <Navbar/>
    <div className="serviceDescription__header">
    <div className="header__text">
          <h1> {selectedService.title}</h1>
          <p><Link to={"/"}>Home</Link>
          <span draggable={false}>➤</span>
          <span><Link to={"/Service"}>Service</Link> </span>
          <span draggable={false}>➤</span>
          <span className='title'>{selectedService.title} </span></p>
          </div>  
    </div>
    <div className="serviceDescription__wrapper">
    <div className="left__serviceDescription">
        <div className="left__image">
        
            <img src={selectedService.Image} alt="" />

        </div>
    </div>
    <div className='right__serviceDescription'>
        <div className="serviceDescription__right__text">
            <h1>{selectedService.title}</h1>
            <p>{selectedService.desc}</p>
        </div>
      
    </div>
    
    </div>
   
    <div className='serviceSubDescription'>
          {selectedService.subServices && selectedService.subServices.length > 0 && (
            <div className='serviceSub'>
              <h2>Sub-Services</h2>
              <div className="card">
        <SubServices data={selectedService.subServices}/>

                
      </div>
            </div>
          )}
        </div>

        <Footer/>

    
    </div>
    </div>
  );
}

export default ServiceDescription;
