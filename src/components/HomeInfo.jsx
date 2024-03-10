import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'
const InfoBox = ({text, link ,btnText}) => {
  return (
    <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>{text}</p>
      <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText} 
        <img src ={arrow} className='w-4 h-4 object-contain'/>
      </Link>
      
    </div>
  )
}

const renderContent ={
    1: (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Aziz</span> 👋🏻
            <br />
            I'm a student at NUML, an aspiring full-stack developer and a tech enthusiast.
        </h1>

    ),
    2: (
        <InfoBox text="I'm extremely passionate about tech particularly in the field of web develoment (mern stack + 3js), my intersest also lies in machine learning and cloud computing using AWS." link='/about' btnText='More about me'/>
        
    ),
    3: (
        
        <InfoBox text='Take a look at my humble portfolio 🤭' link='/projects' btnText="Visit my portfolio"/>
        
    ),
    4: (
        <InfoBox text="I'm always open to new opportunities and collaborations, feel free to reach out to me." link='/contact' btnText='Get in touch'/>
    ),

}
const HomeInfo = ({currentStage}) => {
  return (
    <div>
     {renderContent[currentStage] || null}
    </div>
  )
}

export default HomeInfo
