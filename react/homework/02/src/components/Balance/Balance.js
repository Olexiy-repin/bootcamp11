import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = ({ balance, summWithdraw, summDeposit }) => (
  <section className={styles.balance}>
    <span>
      <span role="img" aria-label="arrowUp">
        ⬆
      </span>
      {summDeposit}$
    </span>
    <span>
      <span role="img" aria-label="arrowDown">
        ️⬇
      </span>
      {summWithdraw}$
    </span>
    <span> Balance: {balance}$</span>
  </section>
);

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  summWithdraw: PropTypes.number.isRequired,
  summDeposit: PropTypes.number.isRequired,
};

export default Balance;
