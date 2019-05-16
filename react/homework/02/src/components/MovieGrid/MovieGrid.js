import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieGrid.module.css';
import MovieGridItem from '../MovieGridItem/MovieGridItem';

const MovieGrid = ({ message, videoDb }) => (
  <div className={styles.movieGrid}>
    {!videoDb.length && <p className={styles.errorMessage}>{message}</p>}
    {videoDb.map(el => (
      <MovieGridItem key={el.id} {...el} />
    ))}
  </div>
);

MovieGrid.propTypes = {
  videoDb: PropTypes.arrayOf(PropTypes.shape).isRequired,
  message: PropTypes.string.isRequired,
};

export default MovieGrid;
