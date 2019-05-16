import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const Stats = ({ title, stats }) => (
  <section className={styles.statsSection}>
    <h2 className={styles.title}>{title}</h2>

    <ul className={styles.statList}>
      {stats.length > 0 &&
        stats.map(el => (
          <li key={el.id} className={styles.item}>
            <span>{el.label}</span>
            <span>{el.percentage}%</span>
          </li>
        ))}
    </ul>
  </section>
);

Stats.defaultProps = {
  title: 'Upload stats',
};

Stats.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape).isRequired,
  title: PropTypes.string,
};

export default Stats;
