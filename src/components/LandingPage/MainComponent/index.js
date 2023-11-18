import React from 'react'
import './styles.css';
import Button from '../../Common/Button';
import iphone from '../../../assets/iphone.png';
import  gradient from '../../../assets/gradient.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RWebShare } from "react-web-share";

const MainComponent = () => {
  return (
    // main-component == flex-info
    <div className='main-component'>
      <div className='left-component'>
        <motion.h1 className='track-crypto-heading' 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
            Track Crypto
        </motion.h1>
        <motion.h1 className='real-time-heading'
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 , delay: 0.3}}
        >
            Real Time.
        </motion.h1>
        <motion.p className='info-text'
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 , delay: 0.5}}
        >
            Track crypto through a public api in real time. Visit the dashboard to do so!
        </motion.p>
        <motion.div className='btn-flex'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 , delay: 0.7}}
        >
          <Link to='/dashboard'>
            <Button text={"Dashboard"}  />
          </Link>
          <RWebShare
            data={{
              text: "Crypto Tracker",
              url: "https://crypto-tracker-app.netlify.app/",
              title: "Crypto Tracker",
            }}
          >
            <Button text={"share app"} Outlined={true}/>
          </RWebShare>
          
        </motion.div>
      </div>
      <div className='phone-container'>
        <motion.img src={iphone} className='iphone' alt='iphone'
          initial={{y:-10}}
          animate={{y:10}}
          transition={{ type:"smooth",duration:2, repeat:Infinity, repeatType:"mirror"}}
        />
        <img src={gradient} className='gradient' alt='gradient'/>
      </div>
    </div>
  )
}

export default MainComponent
