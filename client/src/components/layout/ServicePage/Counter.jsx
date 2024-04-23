import React,  { useState } from 'react'
import { counters } from '../../../Data/dummy'
import '../../../styles/Counter.scss'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
function Counter() {

  const [counterOn,SetCounterOn]= useState(false)

  return (
    <div className='app__counter'>
                  <ScrollTrigger onEnter={()=> SetCounterOn(true)} onExit={()=> SetCounterOn(false)}>

        <div className="counter__container">
            <div className="counter__wrapper">

                 {counters.map((counter,index)=>(
                    <div className="counter__item" key={index}>
                    <h3 className="counter__number"> {counterOn && <CountUp  start={0} end={counter.num} duration={5} delay={0}/>}
                    {counter.desc}</h3>
                    <p className="counter__title">{counter.name}</p>
                    </div>
                    ))}


            </div>

        </div>
        </ScrollTrigger>

    </div>
  )
}

export default Counter