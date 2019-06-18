// ------------------- with React
// import React, { Component } from 'react';
// import Counter from 'components/Counter';
//
// class CounterContainer extends Component {
//   render() {
//     return (
//       <Counter />
//     );
//   }
// }
//
// export default CounterContainer;

// ------------------- with Redux
import React, { Component } from 'react';
import Counter from 'components/Counter';
import { connect } from 'react-redux';
import * as counterActions from 'store/modules/counter';

class CounterContainer extends Component {
  handleIncrement = () => {
    this.props.increment();
  }

  handleDecrement = () => {
    this.props.decrement();
  }

  render() {
    const { handleIncrement, handleDecrement } = this;
    const { number } = this.props;

    return (
      <Counter
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        number={number}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  number: state.counter.number
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(counterActions.increment()),
  decrement: () => dispatch(counterActions.decrement())
})
 
// connect()
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
