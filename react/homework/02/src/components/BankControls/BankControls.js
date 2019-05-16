import React from 'react';
import PropTypes from 'prop-types';
import styles from './BankControls.module.css';

const BankControls = ({ userInput, onChange, onClick }) => (
  <section className={styles.controls}>
    <input
      className={styles.controlsInput}
      type="number"
      onChange={onChange}
      value={userInput}
    />
    <button className={styles.controlsButton} onClick={onClick} type="button">
      Deposit
    </button>
    <button className={styles.controlsButton} onClick={onClick} type="button">
      Withdraw
    </button>
  </section>
);

BankControls.propTypes = {
  userInput: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BankControls;
