import React from 'react';
import styles from './Statistics.module.css';

function Statistics({ stats, title }) {
  return (
    <section className={styles.sectionStat}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.list}>
        {stats.map(stat => (
          <li key={stat.id} className={styles.item}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>4%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
