import React, { ReactComponentElement } from 'react'
import 'react-vertical-timeline-component/style.min.css';
import styles from "./css/Project.module.css";
import Image from 'next/image';


const ProjectPage = () => {
  const projects = [
    {
      title: "Project 1",
      img: "",
      desc: 
      <div>
        Some description
      </div>,
    },
    {
      title: "Project 1",
      img: "",
      desc: 
      <div>
        Some description
      </div>,
    },
    {
      title: "Project 1",
      img: "",
      desc: 
      <div>
        Some description
      </div>,
    },
  ]
 
  return (
    <div id="projects" className={styles.project}>
      <h1>Projects</h1>
      {projects.map((project, index) => (
          <div key={index} className={styles.projectItem}>
            <div className={styles.icon}>
              <Image src={project.img} alt={project.title} width={100} height={100} />
            </div>
            <div className={styles.desc}>{project.desc}</div>
          </div>
      ))}
    </div>
  )
}

export default ProjectPage