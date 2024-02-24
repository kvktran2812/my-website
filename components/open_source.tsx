import React from 'react'
import Image from 'next/image'
import { open_source_data } from '@/lib/data'
import { Container, Row, Col } from 'react-bootstrap'
import Link from "next/link";


const OpenSource = () => {
  return (
    <div id="open_source" className='pt-20'>
      <h1 className='header-1'>Open Source</h1>
      {open_source_data.map(object => (
        <Container key={object.id}>
            <Row>
                <Col md={2}><h1 className='header-2'>{object.title}</h1></Col>
                <Col md={10} style={{marginTop: '10px'}}>
                    <span><Link href={object.github}>GitHub</Link></span> |
                    <span><Link href={object.documentation}> Documentation</Link></span>    
                </Col>
            </Row>
            
            <Row>
                <Col>
                    <img src={object.image} alt="Avatar" className="w-[500px] h-[300px]"></img>
                </Col>
                <Col style={{paddingTop: "20px"}}>
                    <p>{object.description}</p>
                    <p style={{marginTop: "10px"}}>I'm one of the contributors of this Python library</p>
                </Col>
            </Row>
        </Container>
      ))}
    </div>
  )
}

export default OpenSource