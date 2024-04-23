import React from 'react'
import { Team } from '../../../Data/dummy'
import '../../../styles/AboutTeam.scss'
import { FaFacebook,FaInstagram,FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function AboutTeam() {
  return (
    <div className='aboutTeam__app'>

        <div className="aboutTeam__container">
            <div className="aboutTeam__header">
                <h1>Meet Our Team</h1>
                <p>We Are The Best Team</p>
            </div>
            
            <div className="aboutTeam__card__container">
                {Team.map((team,index)=>(
                    <div key={index} className="aboutTeam__card">
                        <div className="card__image">
                                <img src={team.image} alt="" />
                        </div>
                        

                        <div className="card__desc">
                            <h2>{team.name}</h2>
                            <p>{team.role}</p>
                       
                            <div className="aboutHero__icon">
                       
                                <div className='social-media'>
                                        <a href="/#" className='icon'><FaFacebook/></a>
                                        <a href="/" className='icon'><FaInstagram/></a>
                                        <a href="/" className='icon'><FaWhatsapp/></a>
                                        <a href="/" className='icon'><MdEmail/></a>

                                 </div>
                             </div>
                        </div>
                        </div>
                ))}

            </div>
        </div>

    </div>
  )
}

export default AboutTeam