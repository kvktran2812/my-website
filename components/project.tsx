import React from 'react'
import 'react-vertical-timeline-component/style.min.css';
import { projects } from '@/lib/data';
import { Card, Button, CardTitle, CardBody, CardText } from 'react-bootstrap';

const ProjectPage = () => {
  return (
    <div id="projects" className='pt-20'>
      <h1 className='header-1'>Project</h1>
      {projects.map(project => (
        <Card key={project.id} style={{ width: '20rem' }}>
          <CardBody>
            <CardTitle>{project.title}</CardTitle>
          </CardBody>
        </Card>
      ))}
    </div>
  )
}

export default ProjectPage