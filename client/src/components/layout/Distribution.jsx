import React, { useEffect, useRef } from 'react'
import {IoLogoGooglePlaystore} from 'react-icons/io5'
import {BsApple} from 'react-icons/bs'
import pic from '../../assets/phone3.jpg'
import '../../styles/Distribution.scss'
import { motion,useAnimation, useInView } from 'framer-motion'

function Distribution() {

    const ref = useRef(null);
    const inView=useInView(ref);
    const animation1 = useAnimation();
 

    useEffect(() => {
        if (inView) {
            animation1.start({
                x: 0,
                opacity: 1,
                scale: 1,
                transition: { duration: 1.5 }
            });
        } else {
            animation1.start({
                x: "-100px",
                opacity: 0,
                scale: 0.5,
                transition: { duration: 0.5 }
            });
        }
    }, [inView, animation1]);

   

  return (
    <div  className='app__distribution'>
        <div ref={ref} className="distirbution__container">
            <div className="left__distribution">
                <motion.div 
                animate={animation1}
                className="distribution__text">
                    <h1>Karim PRESS Also <span>Work on Your Phone</span> </h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, aut?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quam.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, cupiditate!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum libero quisquam tempora facilis iste? Magnam ratione in repudiandae laudantium et!
                        </p> 
                </motion.div>   
                <div className="distribution__button">
                    <motion.button
                    animate={animation1}>
                        <BsApple/>
                        Download App </motion.button>
              
                <motion.button  animate={animation1}>
                        <IoLogoGooglePlaystore/>
                        Download App </motion.button>
                        </div>
                </div>
            
            <motion.div
            animate={animation1}
            className="right__distribution">
                <img src={pic} alt=""/>
            </motion.div>
        </div>
    </div>
  )
}

export default Distribution