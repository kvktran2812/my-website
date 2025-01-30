import React, { ReactComponentElement } from 'react'
import 'react-vertical-timeline-component/style.min.css';
import styles from "./css/Project.module.css";
import Image from 'next/image';
import { link } from 'fs';


const ProjectPage = () => {
  const projects = [
    {
      title: "Computer Vision Legacy",
      link: "https://github.com/kvktran2812/computer-vision",
      img: "/img/project3.png",
      desc: 
      <div>
        This repository contains my code for computer vision tasks, I re-implement famous legacy architectures, papers, and models to learn how those
        technologies work. All those models are built from scratch with torch and Python. 
      </div>,
    },
    {
      title: "Trueyn-Kieu-GPT",
      link: "https://github.com/kvktran2812/scratch-torch-gpt",
      img: "/img/project1.png",
      desc: 
      <div>
        In this project, I built a GPT model from scratch using Pytorch to generate six-eight style poem (a type of poetry in Vietnam). 
        All components like single-head attention, multi-head attention, and feed forward are implemented from scratch. The model learn Vietnamese language through Truyen Kieu dataset
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
              <p><b>{project.title}</b></p>
              {project.desc}
            </div>
          </div>
      ))}
    </div>
  )
}

export default ProjectPage