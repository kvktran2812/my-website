import React from "react";
import styles from "./css/Timeline.module.css";
import Image from "next/image";

const Timeline = () => {
  const events = [
    {
      date: "June - Nov 2024",
      image: "/img/ahamove.png",
      title: "Machine Learning Engineer at AhaMove",
      description:
        <div>
            <p>
                I got another internship after I graduate. This time it&apos;s a role related to machine learning, tasks that I always dream to do.
            </p>
            <p>Here are some of my tasks:</p>
                <li>Researched and developed latest deep learning models for NLP and computer vision tasks</li>
                <li>Deployed models on AWS platforms, maintained and monitored models availability and reliability</li>
                <li>Fine-tuned pre-trained model from Hugging Face, improved performance by 20%</li>
                <li>Performed large scale data analysis and visualization</li>
        </div>
    },
    {
      date: "April 2023 - June 2024",
      image: "/img/uoit.png",
      title: "Back to university and graduate from Bsc in Computer Science at UOIT",
      description: "Enhanced my knowledge in math, statistic, and machine learning",
    },
    {
      date: "September 2022 - April 2023",
      image: "/img/ki3.jpg",
      title: "Software Developer Intern at Ki3 Photonics Inc",
      description:
        <div>
            <p>
                This is my first internship. I worked under supervision of <a href="https://www.linkedin.com/in/piotr-roztocki/"><u>Dr Piotr Roztocki</u></a>, 
                we collaborated with <a href="https://qubridge.io/"><u>Quantum Bridge</u></a> to develop an open-source Python library called <a href="https://github.com/graphiq-dev/graphiq"><u>GraphiQ</u></a> for quantum computing and a <a href="https://arxiv.org/abs/2402.09285"><u>research paper</u></a>. 
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
      image: "/img/uoit.png",
      title: "University of Ontario Institute of Technology",
      description:
        <div>
        <p>After complete my college diploma, I continued my study in Computer Science at UOIT</p>
        <p>In 2022, I achieved 2nd place at CANDEV Hackathon, detail <a href="#"><u>here</u></a>.</p>
        </div>,
    },
    {
        date: "September 2018 - April 2021",
        image: "/img/seneca.png",
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
                    <Image src={event.image} alt={event.title} width={75} height={75}/>
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
