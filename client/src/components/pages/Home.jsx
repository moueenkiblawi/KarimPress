import React, { useEffect, useState } from 'react'
import '../../styles/home.scss'
import {TiTick} from 'react-icons/ti'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import Navbar from '../layout/Navbar'
import DashboardPreview from '../layout/DashboardPreview'
import Analytics from '../layout/Analytics'
import Feature from '../layout/Feature'
import Distribution from '../layout/Distribution'
import Footer from '../layout/Footer'
import {motion} from 'framer-motion'
import {containerVariant} from '../../Data/variants'
import { imageSlide } from '../../Data/dummy'
function Home() {
const [currentState,setCurrentState]=useState(0)
const slideLength = imageSlide.length;
const autoScroll =true;
let slideInterval;
let intervalTime=5000;


const nextSlide=()=>{
  setCurrentState(currentState===slideLength-1 ? 0 :  currentState + 1)}

const prevSlide=()=>{
  setCurrentState(currentState===0 ?  slideLength-1:  currentState - 1)
}

function auto(){
  slideInterval = setInterval(nextSlide,intervalTime)
}
useEffect(()=>{
  setCurrentState(0)
},[])
useEffect(()=>{
if(autoScroll){
  auto();
}
return()=>clearInterval(slideInterval);

})
 
  return (
    <div className="home">

        <Navbar/>


    <div className='app__home' >
     

      <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide}/>
      <AiOutlineArrowRight className='arrow next' onClick={nextSlide}/>

      {imageSlide.map((slide,index)=>{

        return(
          <div className={index===currentState ?
          "slide current" : "slide"}>
            {index === currentState && (
              <>
              <img src={slide.Image} alt="slide" draggable= {false} />
              <div className="content">

              <motion.div 
     initial={{y:-250}}
     animate={{y:-10}}
     transition={{delay:0.2,type:"spring",stiffness:120}}

      className="home__text">
        <h1><span>Make Your Business</span></h1>
        <h1><span>More Powerfull.</span></h1>
      </motion.div>
      <div className="ticks__container">
        <p>
          <span>
            <TiTick/>
          </span>
          Lifetime Support 
        </p>
        <p> 
          <span>
            <TiTick/>
          </span>
          No NCC Register 
        </p>
      </div>

        {/* <motion.div
        initial={{x:'-100vw'}}
        animate={{x:0}}
        transition={{type:"spring",stiffness:120}}
        className="input__container">
          <input type="text" placeholder='Input your Email' />
          <motion.button
         whileHover= {{scale:1,textShadow:"0px 0px 8px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)"}}
          >
            Try </motion.button>
        </motion.div> */}
              </div>
              </>
            )}

          </div>
        )
      })}
      
     
    </div>

  

    <motion.div
    variants={containerVariant}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false,amount:0.5 }}
    className="Dashboard__priview">

      <DashboardPreview/>
      </motion.div>
    

    
<div>
    <Analytics/>
</div>
    

    <Feature/>
    <Distribution/>
  
    <Footer/>
    </div>
    
  )
}

export default Home