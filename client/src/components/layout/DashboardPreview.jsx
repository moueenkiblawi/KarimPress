import React from 'react'
import '../../styles/DashboardPreview.scss'
import dashboard from '../../assets/dashboardImage.jpg'
import {motion} from 'framer-motion'
function DashboardPreview() {
  
  return (
    <motion.div 
   
    className='app__dashboard'>

            <img src={dashboard} alt="" draggable= {false}/>
    </motion.div>
  )
}

export default DashboardPreview