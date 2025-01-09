import React from "react";
import styles from "./css/Kaggle.module.css";
import Image from "next/image";
import Card from 'react-bootstrap/Card';


export default function Kaggle() {
    const cards = [
        {
            title: "Fetal Health",
            desc: "",
            img: "",
        },
        {
            title: "Mental Health",
            desc: "",
            img: "",
        },
        {
            title: "CIBMTR Health",
            desc: "",
            img: "",
        },
    ]

    return (
        <div id="kaggle" className={styles.container}>
            <h1>Kaggle</h1>
            <div className="row">
                {cards.map((card, index) => (
                    <div key={index} className={styles.card}>
                        <h6>{card.title}</h6>
                    </div>
                ))}
            </div>
        </div>
    );
}