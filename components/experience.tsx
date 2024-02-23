import { experience } from '@/lib/data'
import React from 'react'

const ExperiencePage = () => {
  return (
    <div>
      <div id="experience" className='pt-20'></div>
        <h1 className='header-1'>Experience</h1>
        {
          experience.map(e => (
            <div key={e.id} className='mb-10'>
              <div className='grid grid-cols-2 gap-4'>
                  <p>{e.title}</p><span className='text-right'>{e.time}</span>
              </div>
              <p className='mb-3'>Company: {e.company}</p>
              <ul>
                {
                  e.details.map(detail => (
                    <li key={e.details.indexOf(detail)} className='list-disc ml-10'>{detail}</li>
                  ))
                }
              </ul>
            </div>
          ))
        }
    </div>
  )
}

export default ExperiencePage