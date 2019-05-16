import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingItem.module.css';

const PricingItem = ({ label, icon, capacity, price, description }) => (
  <div className={styles.pricingItem}>
    <img src={icon} alt="icon" className={styles.pricingIcon} />
    <h2>{label}</h2>
    <p>{capacity} Storage</p>
    <p>{description}</p>
    <p>${price}/MO</p>
    <button className={styles.pricingButton}>Get Started</button>
  </div>
);

PricingItem.propTypes = {
  capacity: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default PricingItem;
