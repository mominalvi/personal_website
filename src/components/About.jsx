import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt>{title}</Tilt>
  )
}
 
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leadin-[30px]'
      >
      Hi!

      I'm Momin Alvi, a Computer Science student at Queen's University with a specialization in Software Design. I have a keen interest in leveraging technology and business to develop innovative solutions.

      I'm currently co-founding a startup in the senior homecare space. I'm also exploring opportunities in computer science.

      When I'm not coding or brainstorming startup ideas, you can find me at the gym, with friends, or playing sports.

      Happy to connect! You can reach me at momin.alvi@queensu.ca
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => 
          <ServiceCard key={service.title} index={index} {...service}/>        
        )}

      </div>
    </>
  )
}

export default About