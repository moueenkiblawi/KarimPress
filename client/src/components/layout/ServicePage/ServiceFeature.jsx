import React from 'react'
import { features } from '../../../Data/dummy'
import { TiTick } from 'react-icons/ti'
import img from '../../../assets/812074f8fc2ef4ec861e2d8425f25d34.jpg'
import '../../../styles/serviceFeature.scss'

function ServiceFeature() {
    

  return (
    <div className='serviceFeature' >
    <div 
    className='app__feature'>
        <div
        
        className="feature__container">
            
            <div className="left__feature">
                <img src={img} alt="" draggable={false} />

            </div>


            <div

            className="right__feature">

                <div className="right__text"><h2><span>Feature to Help</span>  Your team Success</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aperiam aut quas et nesciunt officiis odio quibusdam sint, voluptatum quia fugit voluptatibus, facere maiores exercitationem harum similique qui non eos.</p>
           </div>
           <div className="feature__content">
           {features.map((feature,index)=>(
                        <div key={index} className='feature'>
                            <TiTick/>
                            <div className="feature__text">
                                <p>{feature.title}</p>
                                <span>{feature.desc}</span>
                            </div>
                        </div>
                    )
                    
                    )}
           </div>
                 </div>
        </div>


       
    </div>
    </div>
  )
}

export default ServiceFeature