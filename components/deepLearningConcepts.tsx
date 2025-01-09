import React, { ReactComponentElement } from 'react'
import 'react-vertical-timeline-component/style.min.css';
import styles from "./css/Concepts.module.css";
import Image from 'next/image';


const DeepLearningPage = () => {
  const concepts = [
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
    <div id="deep-learning-concepts" className={styles.deepLearning}>
      <h1>Deep Learning Concepts</h1>
      <p>These are some of the deep learning famous models, architectures, and algorithms that I re-implemented from scratch from multiple research papers.
        Often when I learn new deep learning knowledge, I try to replicate it to understand how it works from the smallest detail.
      </p>
      {concepts.map((concept, index) => (
          <div key={index} className={styles.projectItem}>
            <div className={styles.icon}>
              <Image src={concept.img} alt={concept.title} width={100} height={100} />
            </div>
            <div className={styles.desc}>{concept.desc}</div>
          </div>
      ))}
    </div>
  )
}

export default DeepLearningPage