import React from 'react';
import styles from './PatientCaring.module.css';
import banner from '../../assets/patientcaring.jpg'; // Combined image from your screenshot
import checkmark from '../../assets/tick-blue.jpg'; 

export default function PatientCaring() {
  const points = [
    "Stay Updated About Your Health",
    "Check Your Results Online",
    "Manage Your Appointments"
  ];

  return (
    <section className={styles.container}>
      <div className={styles.imageSection}>
        <img src={banner} alt="Doctors and patient" />
        <div className={styles.consultationBadge}>
           <span>Free Consultation</span>
           <p>Consultation with the best</p>
        </div>
      </div>
      <div className={styles.contentSection}>
        <h5 className={styles.subtitle}>HELPING PATIENTS FROM AROUND THE GLOBE!!</h5>
        <h2 className={styles.title}>Patient <span>Caring</span></h2>
        <p className={styles.description}>
          Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. 
          We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
        </p>
        <ul className={styles.list}>
          {points.map((text, i) => (
            <li key={i}><img src={checkmark} alt="check" /> {text}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}