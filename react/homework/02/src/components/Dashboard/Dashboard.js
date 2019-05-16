import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import BankControls from '../BankControls/BankControls';
import Balance from '../Balance/Balance';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import styles from './Dashboard.module.css';

class Dashboard extends Component {
  state = {
    history: [],
    balance: 0,
    summDeposit: 0,
    summWithdraw: 0,
    userInput: '',
  };

  onHandleClick = e => {
    const newHistory = {
      id: uuidv4(),
      type: e.target.textContent,
      amount: Number(this.state.userInput),
      date: new Date().toISOString(),
    };

    if (Number(this.state.userInput) === 0) {
      return (() => {
        this.setState(() => ({
          userInput: '',
        }));
        alert('Введите сумму для проведения операции!');
      })();
    }

    if (newHistory.type === 'Deposit') {
      return this.setState(prevState => ({
        history: [...prevState.history, newHistory],
        summDeposit: prevState.summDeposit + Number(prevState.userInput),
        balance: prevState.balance + Number(prevState.userInput),
        userInput: '',
      }));
    }
    if (this.state.balance >= this.state.userInput) {
      return this.setState(prevState => ({
        history: [...prevState.history, newHistory],
        summWithdraw: prevState.summWithdraw + Number(prevState.userInput),
        balance: prevState.balance - Number(prevState.userInput),
        userInput: '',
      }));
    }

    return (() => {
      this.setState(() => ({
        userInput: '',
      }));
      alert('На счету недостаточно средств для проведения операции!');
    })();
  };

  onHandleChange = e => {
    this.setState({
      userInput: e.target.value,
    });
  };

  render() {
    const {
      history,
      balance,
      summDeposit,
      summWithdraw,
      userInput,
    } = this.state;
    return (
      <div className={styles.dashboard}>
        <h2 className={styles.taskTitle}>Task 03</h2>
        <BankControls
          userInput={userInput}
          onChange={this.onHandleChange}
          onClick={this.onHandleClick}
        />
        <Balance
          balance={balance}
          summDeposit={summDeposit}
          summWithdraw={summWithdraw}
        />
        <TransactionHistory history={history} />
      </div>
    );
  }
}

export default Dashboard;
