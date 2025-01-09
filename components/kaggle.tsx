import React from "react";
import styles from "./css/Kaggle.module.css";
import Image from "next/image";
import Card from 'react-bootstrap/Card';


export default function Kaggle() {
    const cards = [
        {
            title: "Fetal Health",
            desc: 
                <div>
                    <p>In this challenge, I used ensemble solution to predict the fetal health on a tabular data.
                        The goal is to correctly identify abnormal fetal. Here are <a href=""><u>details</u></a>.
                    </p>
                </div>,
            img: "",
        },
        {
            title: "Mental Health",
            desc: 
            <div>
                <p>In this challenge, the goal is to predict the severity of depression based on several features like career, family, and health. Here are <a href=""><u>details</u></a>.
                </p>
            </div>,
            img: "",
        },
        {
            title: "CIBMTR Health",
            desc: 
            <div>
                <p>In this challenge, I analyzed the survival function for allogeneic HCT patients.
                    The patients who receive transplant might have different reeaction over time, which is very challenging. Here are <a href=""><u>details</u></a>.
                </p>
            </div>,
            img: "",
        },
    ]

    return (
        <div id="kaggle" className={styles.container}>
            <h1>Kaggle</h1>
            <p>
                Here are some of my Kaggle competitions. So far I haven&apos;t achieve any medals or top of the leaderboard. 
                However, from Kaggle competition, I think I learn a lot from other contestants around the world.
                It also gave me many ideas to other projects that I am working on.
            </p>
            <div className="row">
                {cards.map((card, index) => (
                    <div key={index} className={styles.card}>
                        <h5><b>{card.title}</b></h5>
                        {card.desc}
                    </div>
                ))}
            </div>
        </div>
    );
}