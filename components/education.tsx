import React from 'react'
import { educations } from '@/lib/data'
import { Education } from '@/lib/definition'

const EducationPage = () => {
  return (
    <div>
      <div  id="education" className='pt-20'></div>
      <h1 className='header-1'>Education</h1>
        {educations.map(education => (
            <div key={education.id} className='mb-10'>
              <div key={education.id} className='grid grid-cols-2 gap-4'>
                  <p>{education.degree}</p><span className='text-right'>{education.time}</span>
              </div>
              <p>{education.school}</p>
            </div>
          ))}
    </div>
  )
}

export default EducationPage