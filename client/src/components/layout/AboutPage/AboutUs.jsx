import React from 'react'
import '../../../styles/AboutUsFeature.scss'
import img from "../../../assets/choose.jpg"
import { aboutUs } from '../../../Data/dummy'
function AboutUs() {
  return (
    <div className='aboutUs__app'>
        <div className="left__aboutUs">
            <img src={img} alt="" />
        </div>


        <div className="right__aboutUs">
            <div className="right__aboutUs__text">
                <h1>Why Choose Us?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam ultricies Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing.  </p>
            </div>
            <div className="right__aboutUs__wrapper">
                {aboutUs.map((about,index)=>(
                        <div key={index} className="right__aboutUs__card">
                           <div className="right__aboutUs__icon">
                           <about.icon/>
                           </div>
                            
                        
                        <div className="card__text">
                                <p>{about.title}</p>
                                <span>{about.desc}</span>
                        </div>
                        </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default AboutUs