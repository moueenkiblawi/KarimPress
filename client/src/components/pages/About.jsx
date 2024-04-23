import React from 'react'
import Navbar from '../layout/Navbar'
// import { Link } from 'react-router-dom'
import '../../styles/About.scss'
import AboutHero from '../layout/AboutPage/AboutHero'
import Footer from '../layout/Footer'
import AboutMain from '../layout/AboutPage/AboutMain'
import { aboutHero,  aboutValue } from '../../Data/dummy'
import AboutUs from '../layout/AboutPage/AboutUs'
import { Link } from 'react-router-dom'
import AboutTeam from '../layout/AboutPage/AboutTeam'

function About() {
  return (
    <div className='app-about'>
            <Navbar/>
        <div className="about__header">
            <div className="header__text">
                <h1>About Us</h1>
                <p><Link to={"/"}>Home</Link>
                <span draggable={false}>➤</span>
                <span>About Us </span></p>
            </div>
        </div>
{/* <Navbar/> */}

         <div className="about__hero">
            <AboutHero data={aboutHero}/>
        </div>


       <div className="about__main">
       <AboutMain data={aboutValue}/>
       </div>
       
            <div className="aboutUs__feature">
                    <AboutUs/>
            </div>

{/* 
        <div className="about__hero">
            <AboutHero data={aboutUs}/>
        </div> */}
        

        {/* <div className="about__main">
       <AboutMain data={aboutValue}/>
       </div> */}

        <div className="aboutTeam__feature">
            <AboutTeam/>
        </div>
        <Footer/>
        
    </div>
  )
}

export default About