import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ history }) => (
  <table className={styles.history}>
    <thead>
      <tr>
        <th>Transaction</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {history.map(el => (
        <tr key={el.id}>
          <td>{el.type}</td>
          <td>{el.amount}$</td>
          <td>{new Date(el.date).toLocaleString()}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default TransactionHistory;
