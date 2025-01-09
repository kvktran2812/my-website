import React, { ReactComponentElement } from 'react'
import 'react-vertical-timeline-component/style.min.css';
import styles from "./css/Publications.module.css";
import Image from 'next/image';
import { link } from 'fs';


const Publication = () => {
  const publications = [
    {
        title: "GraphiQ: Quantum circuit design for photonic graph states",
        link: "https://quantum-journal.org/papers/q-2024-08-28-1453/",
        date: "August 2024",
        authors: "Jie Lin, Benjamin MacLellan Sobhan Ghanbari, Julie Belleville, Khuong Tran, Luc Robichaud, Roger G. Melko, Hoi-Kwong Lo, and Piotr Roztocki",
    },
  ]
 
  return (
    <div id="publication" className={styles.publication}>
      <h1>Publications</h1>
      <p>
        I need to improve on this one, so far I only have one paper from my internship at Ki3. Hope that I will publish more stuffs.
      </p>
      {publications.map((publication, index) => (
          <div key={index} className={styles.publicationItem}>
            <div className={styles.pubTitle}>
              <a href={publication.link}><u>{publication.title}</u></a>
            </div>
            <div className={styles.pubDate}>{publication.date}</div>
            <div className={styles.pubAuthor}>{publication.authors}</div>
          </div>
      ))}
    </div>
  )
}

export default Publication