import React, { useEffect, useRef, useState } from 'react'
import { analytics } from '../../Data/dummy'
import pic from '../../assets/feature.jpg'
import '../../styles/Analytics.scss'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { motion, useAnimation, useInView} from 'framer-motion'
// import {analyticVariant,containerVariant} from '../../Data/variants'
function Analytics() {
    const ref = useRef(null);
    const inView=useInView(ref);
    const animation = useAnimation();
    const [counterOn,SetCounterOn]= useState(false)
    
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

    
        <div className="app__analytics">
            <div
               
            className="analytics__container">
            <div
               
               ref={ref}
                className="left__analytics">
                    <motion.div
                    animate={animation}
                    className="left__text">
                        <h1>Okay, let's see <span >Karim PRESS in numbers. </span></h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quibusdam cum dolorum corporis laborum, repudiandae tempora quae molestias ab tenetur iusto, saepe nemo doloremque incidunt qui eos optio consectetur. Commodi?
                        </p>
                    </motion.div>
                    <ScrollTrigger onEnter={()=> SetCounterOn(true)} onExit={()=> SetCounterOn(false)}>

                    <motion.div
                    
                    animate={animation}
               
                    className="left__analytics__container">
                        {
                            analytics.map((analytic,index)=>(
                                <div key={index} className="analytic__container">
                                            <div className="analytic__icon">
                                              {counterOn && <CountUp  start={0} end={analytic.num} duration={5} delay={0}/>} 
                                              {analytic.desc}
                                               
                                               
                                            </div>
                                            <p>
                                                {analytic.name}
                                            </p>
                                     </div>
                            ))
                        }
                               

                </motion.div>
                </ScrollTrigger>

                </div>

                <motion.div
                      animate={animation}

  className="right__analytics"
>
  <img src={pic} alt="" draggable={false} />
</motion.div>


        </div>
        </div>
    )
}

export default Analytics