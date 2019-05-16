import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import styles from './Reader.module.css';

class Reader extends Component {
  state = {
    publications: this.props.item,
    count: 0,
    // users: [],
  };

  onIncrement = () => {
    if (this.state.count < this.state.publications.length - 1) {
      this.setState({
        count: this.state.count + 1,
      });
    }
  };

  onDecrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };

  render() {
    const { publications, count } = this.state;

    return (
      <div className={styles.reader}>
        <h2 className={styles.taskTitle}>Task 01</h2>
        <Publication {...publications[count]} />
        <Counter count={count} length={publications.length} />
        <Controls
          onDecrement={this.onDecrement}
          onIncrement={this.onIncrement}
        />
      </div>
    );
  }
}

Reader.propTypes = {
  item: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Reader;
