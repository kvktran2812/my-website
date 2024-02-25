import React from 'react'
import { skills, skillsets } from '@/lib/data'
import { motion } from "framer-motion";
import Image from 'next/image';

const icon_height = 60
const icon_width = 60

const SkillPage = () => {
  return (
    <section
      id='skills'
      className="scroll-mt-28 text-left sm:mb-40 pt-20"
    >
      <h1 className='header-1'>Skills</h1>
      <p>Top Skills: Python, JavaScript, C++, NumPy, Tensorflow, React, FastAPI, MySQL, PostgreSQL</p>
      <ul>
        {
          skillsets.map(obj => (
            <li key={obj.id} className='sub-header-1'>
              {obj.title}
              <ul>
              {obj.skills.map(skill => (
                <li key={skill.id} className='skill-style-0'>
                  <Image height={icon_height} width={icon_width} src={skill.icon} alt=''/>
                  <p>{skill.name}</p>
                </li>
              ))}
              </ul>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default SkillPage