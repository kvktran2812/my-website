import { experience } from '@/lib/data'
import React from 'react'
import {Accordion, AccordionHeader, AccordionBody, AccordionItem} from 'react-bootstrap';

const ExperiencePage = () => {
  return (
    <div id="experience" className='pt-10'>
      <h1 className='header-1'>Experience & Activities</h1>
      <Accordion defaultActiveKey="0">
        {experience.map(exp => (
          <AccordionItem key={exp.id} eventKey={exp.id.toString()}>
            <AccordionHeader>{exp.title}</AccordionHeader>
            <AccordionBody>
              <h1 className='mb-2'>{exp.company} - {exp.time}</h1>
              {
                <ul>
                {exp.details.map(detail => (
                  <li key={exp.details.indexOf(detail)} className='mb-2'>- {detail}</li>
                ))}
                </ul>
              }
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default ExperiencePage