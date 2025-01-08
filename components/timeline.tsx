import React from "react";
import styles from "./css/Timeline.module.css";

const Timeline = () => {
  const events = [
    {
      date: "June - Nov 2024",
      image: "/eureka-logo.png",
      title: "Machine Learning Engineer at AhaMove",
      description:
        <div>
            <p style={{marginBottom: "10px"}}>
                I got another internship after I graduate. This time it's a role related to machine learning, tasks that I always dreamed to do.
                Here are some of my tasks:
            </p>
            
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            
        </div>
    },
    {
      date: "April 2023 - June 2024",
      image: "/openai-logo.png",
      title: "Back to university and graduate from Bsc in Computer Science at UOIT",
      description: "Enhanced my knowledge in math, statistic, and machine learning",
    },
    {
      date: "September 2022 - April 2023",
      image: "/ki3-logo.png",
      title: "Software Developer Intern at Ki3 Photonics Inc",
      description:
        <div>
            <p style={{marginBottom: "10px"}}>
                This is my first internship. I worked under supervision of <a href="https://www.linkedin.com/in/piotr-roztocki/"><u>Dr Piotr Roztocki</u></a>, 
                we collaborated with Quantum Bridge to develop an open-source Python library called GraphiQ for quantum computing and a research paper. 
            </p>
            <p>Here are some of my tasks:</p>
                <li>Architected a pipeline for large-scale data processing and analysis using Python</li>
                <li>Led the design and development of a visualization module for intereactive circuits rendering</li>
                <li>Optimized code by refactoring over 4000+ lines of code, improved performance by 40%</li>
                <li>Implemented CI/CD workflows with GitHub Actions, ensure seamless development and deployment</li>
                <li>Wrote unit tests for quality assurance using Pytest, maintained test coverage to 98%</li>
            
        </div>
    },
    {
      date: "September 2021 - April 2022",
      image: "/uoit.png",
      title: "University of Ontario Institute of Technology",
      description:
        <div>
        <p>After complete my college diploma, I continued my study in Computer Science at UOIT</p>
        <p>In 2022, I achieved 2nd place at CANDEV Hackathon, detail <a href="#"><u>here</u></a>.</p>
        </div>,
    },
    {
        date: "September 2018 - April 2021",
        image: "/seneca.png",
        title: "Seneca College",
        description:
            <div>
            <p>
                Advanced Diploma in Computer Programming at Seneca College, 
                I studied the basics of computer programming here. Also I won the Seneca College Hackathon 2021, detail <a href="#"><u>here</u></a>.
            </p>
            </div>,
    },
  ];

  return (
    <div id="history" className={styles.container}>
        {events.map((event, index) => (
            <div key={index} className={styles.entryRow}>
                <div className={styles.timespan}>{event.date}</div>
                <div className={styles.icon}>
                    <div className={styles.dot}></div>
                    <img src={event.image}/>
                </div>
                <div className={styles.desc}>
                    <h1><b>{event.title}</b></h1>
                    {event.description}
                </div>
            </div>
        ))}
    </div>
  );
};

export default Timeline;
