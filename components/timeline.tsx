import React from "react";
import styles from "./css/Timeline.module.css";

const Timeline = () => {
  const events = [
    {
      date: "June - Nov 2024",
      image: "/eureka-logo.png",
      title: "Machine Learning Engineer at AhaMove",
      description:
        "I got another internship after school in Vietnam",
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
        "This is my first internship. I worked under supervision of Dr Piotr Roztocki, we collaborated with quantum physicists from Quantum Bridge Lab to develop Python packages that help in simulation, inverse design, and optimization of noisy quantum circuits.",
    },
    {
      date: "September 2021 - April 2022",
      image: "/uoit.png",
      title: "University of Ontario Institute of Technology",
      description:
        <p>After complete my college diploma, I continued my study in Computer Science at UOIT</p>,
    },
    {
        date: "September 2018 - April 2021",
        image: "/seneca.png",
        title: "Seneca College",
        description:
          "Advanced Diploma in Computer Programming at Seneca College, I studied one of the first programming knowledges here. One of the memorable course I took was Advanced Programming in C++",
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
