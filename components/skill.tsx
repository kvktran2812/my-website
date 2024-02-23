import React from 'react'
import { skills } from '@/lib/data'
import { motion } from "framer-motion";

const SkillPage = () => {
  return (
    <section
      id='skills'
      className="scroll-mt-28 text-left sm:mb-40 pt-20"
    >
      <h1 className='header-1'>Skills</h1>
      <p>Top Skills: Python, JavaScript, C++, NumPy, Tensorflow, React, FastAPI</p>
      {/* <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skills.map((skill, index) => (
          <li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            // variants={fadeInAnimationVariants}
          >
            {skill}
          </li>
        ))}
      </ul> */}
    </section>
  )
}

export default SkillPage