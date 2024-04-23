import React, { useEffect, useRef } from 'react'
import img from '../../assets/DashboardPreview1.jpg'
import { features } from '../../Data/dummy'
import { TiTick } from 'react-icons/ti'
import '../../styles/Feature.scss'
import Control from './Control'
import { motion,useAnimation, useInView } from 'framer-motion'
function Feature() {
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
    <div ref={ref}
    className='app__feature'>
        <motion.div
        animate={animation}
        className="feature__container">
            
            <div
            
            className="left__feature">
                <img src={img} alt="" draggable={false} />

            </div>


            <div

            className="right__feature">

                <div className="right__text">
                    <h2><span>Feature to Help</span>  Your team Success</h2>
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
        </motion.div>


        <Control/>
       
    </div>
  )
}

export default Feature