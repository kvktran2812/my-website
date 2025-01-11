import React, { ReactComponentElement } from 'react'
import 'react-vertical-timeline-component/style.min.css';
import styles from "./css/Project.module.css";
import Image from 'next/image';
import { link } from 'fs';


const ProjectPage = () => {
  const projects = [
    {
      title: "GPT from scratch for six-eight poem",
      link: "https://github.com/kvktran2812/scratch-torch-gpt",
      img: "/img/project1.png",
      desc: 
      <div>
        In this project I built a GPT model from scratch using Pytorch to generate six-eight style poem (a type of poetry in Vietnam). 
        All components like single-head attention, multi-head attention, and feed forward are implemented from scratch.
      </div>,
    },
    {
      title: "Financial news data pipeline",
      link: "https://github.com/kvktran2812/financial-news",
      img: "/img/project2.png",
      desc: 
      <div>
        This is a data pipeline that I built to collect news data from multiple sources using web scraping techniques.
        The data is then stored in a database and can be later used for analysis and machine learning tasks.
      </div>,
    },
  ]
 
  return (
    <div id="projects" className={styles.project}>
      <h1>Projects</h1>
      {projects.map((project, index) => (
          <div key={index} className={styles.projectItem}>
            <div className={styles.icon}>
              <a href={project.link}>
                <Image src={project.img} alt={project.title} width={200} height={200}/>
              </a>
            </div>
            <div className={styles.desc}>
              {project.desc}
            </div>
          </div>
      ))}
    </div>
  )
}

export default ProjectPage