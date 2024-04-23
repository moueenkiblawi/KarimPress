import React, { useEffect, useRef } from 'react'
import '../../../styles/SubService.scss'

import { motion,useAnimation, useInView } from 'framer-motion'
import { Link } from 'react-router-dom';

function SubServices({data}) {
    
     
  const ref = useRef(null);
  const inView=useInView(ref);
  const animation = useAnimation();
  const animi = useAnimation();

  useEffect(() => {
      if (inView) {
          animation.start({
              x: 0,
              opacity: 1,
              scale: 1,
              transition: { duration: 1.5 }
          });
      } else {
          animation.start({
              x: "-100px",
              opacity: 0,
              scale: 0.5,
              transition: { duration: 0.5 }
          });
      }
  }, [inView, animation]);
  
  useEffect(() => {
      if (inView) {
          animi.start({
              rotate: 0,
              scale: 1,
              transition: { duration: 1.5 }
          });
      } else {
          animi.start({
              rotate: -180,
              scale: 0.5,
              transition: { duration: 0.1 }
          });
      }
  }, [inView, animi]);

  return (
    <div className='SubService__app' ref={ref}>
    <div className="SubService__container">

       <motion.div
       animate={animation}
        className="SubService__wrapper">
           {data.map((service,index)=>(
                   <div className="SubService__card" key={index}>
                      <i>   {<service.icon/>}
                       </i>
                        
                       <div className="SubService__text">
                           <h3>{service.title}</h3>
                           <p>{service.description}</p>
                       </div>
                       <div className="SubService__link">
                      
                   <Link to={`/service/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                       <button>
                              Learn More
                           </button>
                           </Link>
                       </div>
                      
                       
                      
                    
                   </div>
           ))}
       </motion.div>
                   
                   
                   
    </div>
        
               
   </div>
   
 
  )
}

export default SubServices