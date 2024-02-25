"use client";
import React, { ReactComponentElement } from 'react'
import 'react-vertical-timeline-component/style.min.css';
import { projects } from '@/lib/data';
import { Card, Button, CardTitle, CardBody, CardText, CardImg , Offcanvas, OffcanvasHeader, OffcanvasBody, OffcanvasTitle} from 'react-bootstrap';
import { useState } from 'react';
import Link from 'next/link';

const ProjectPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="projects" className='pt-20'>
      <h1 className='header-1'>Project</h1>
      {projects.map(project => (
        <Card key={project.id} style={{ width: '20rem' }}>
          <button onClick={handleShow} style={{background: "white"}}>
          <CardBody>
            <CardImg variant="top" src={project.image} />
            <CardTitle>{project.title}</CardTitle>
            <CardText style={{textAlign: "justify"}}>{project.description}</CardText>
          </CardBody>
          </button>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>{project.title}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Here are links to details:
              <ul>
                {
                  project.examples.map(e => (
                    <li key={e.id} className='link'><Link href={e.href}>{e.text}</Link></li>
                  ))
                }
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </Card>
      ))}
    </div>
    
  )
}

export default ProjectPage