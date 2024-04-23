import React, { useEffect, useRef } from 'react'
import '../../styles/Control.scss'
import { controls } from '../../Data/dummy'
import { motion,useAnimation, useInView } from 'framer-motion'
import { Link } from 'react-router-dom';

function Control() {

    const ref = useRef(null);
    const inView=useInView(ref);
    const animation = useAnimation();

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
    
    
  return (
    
    <div ref={ref} className='feature__control'>
            <motion.div
            animate={animation}
            className="control__container">
                <div className="control__text">
                    <h1>Top Three Services </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Ipsa fugit corporis doloremque sed qui veniam numquam sit tempore exercitationem delectus?
                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, nulla!</p>

                        <Link to={'/Service'}><button>Show More</button></Link>
                </div>
                <div className="control__content">
                    {controls.map((control,index)=>(
                        <div key={index} className="control">
                           <div className="control__icon">
                           {<control.icon/>}</div> 
                            <div className="control__text__content">
                                <p>{control.name}</p>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Ab, inventore!
                                        Lorem ipsum dolor sit amet.                                    
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
    </div>
  )
}

export default Control