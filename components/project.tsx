"use client";
import React, { ReactComponentElement } from 'react'
import 'react-vertical-timeline-component/style.min.css';
import { projects } from '@/lib/data';
import { Card, Button, CardTitle, CardBody, CardText, CardImg, Nav, NavItem} from 'react-bootstrap';
import { useState } from 'react';
import Link from 'next/link';

const ProjectPage = () => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div id="projects" className='pt-20'>
      <h1 className='header-1'>Project</h1>
      {projects.map(project => (
        <div key={project.id}>
          <p style={{margin: "15px 0px 5px 0px", color: "blue", fontSize: "20px"}}>{project.title}</p>
          <p>{project.description}</p>
          <ul className='list-group list-group-horizontal position-relative overflow-auto'>
            {project.examples.map(e => (
              <li key={e.id} className='list-group-item'>
                <Card style={{ width: '20rem' }}>
                  <Link href={e.href}>
                  <CardBody>
                    <CardImg variant="top" src={e.image} />
                    <CardTitle>{e.text}</CardTitle>
                    <CardText style={{textAlign: "justify"}}>{project.description}</CardText>
                  </CardBody>
                  </Link>
                </Card>
              </li>
            ))
          }
          </ul>
        </div>
      ))}
    </div>
    
  )
}

export default ProjectPage