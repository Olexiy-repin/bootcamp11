import React, { Component } from 'react';
import UserCard from './UserCard/UserCard';
import userDb from './user-card.json';
import styles from './UserCard/UserCard.module.css';
import Stats from './Stats/Stats';
import statsDb from './statsDb.json';
import PricingItem from './PricingItem/PricingItem';
import pricingPlanItems from './pricing-plan.json';
import priceStyles from './PricingItem/PricingItem.module.css';
import transactionDb from './transaction.json';
import Transaction from './Transaction/Transaction';

class App extends Component {
  state = {
    transactiopnDb: transactionDb,
  };

  render() {
    const { transactiopnDb } = this.state;
    return (
      <>
        <div className={styles.profileContainer}>
          {userDb.map(el => (
            <UserCard key={el.id} {...el} />
          ))}
        </div>
        <Stats stats={statsDb} />
        <ul className={priceStyles.pricingPlan}>
          {pricingPlanItems.map(el => (
            <li className={priceStyles.item} key={el.id}>
              <PricingItem {...el} />
            </li>
          ))}
        </ul>

        <Transaction transactionDb={transactiopnDb} />
      </>
    );
  }
}

export default App;
