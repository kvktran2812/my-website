import React from 'react'
import EducationPage from './education'

const About = () => {
  return (
    <div className='justify-center' >
      <div  id="about" className='pt-20'></div>
        <h1 className='header-1'>About Me</h1>
        <p className='text-center my-5'>
            As a 4th year Computer Science student at Ontario Tech University, I specialize in machine learning and software engineering, showcasing my strong technical abilities in these cutting-edge fields. 
            Beyond my academic pursuits, I am passionate about cooking, a hobby that reflects my creative side and love for exploring different cultures. 
            I am also an avid cat lover and enjoy traveling, experiences that enrich my life and provide a balance to my technology-focused studies. 
            As I near the completion of my degree, I am a well-rounded individual, blending technical expertise with diverse personal interests.
        </p>

        <EducationPage />
    </div>
  )
}

export default About