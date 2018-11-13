import React from 'react';
import {View, Text} from 'react-native';

import CounterActionButtonComponent from '../../components/counterActionButton/CounterActionButton.component';
import CounterLabelComponent from '../../components/counterLabel/CounterLabel.component';

import styles from './Counter.styles';

/**
 * Counter container
 * 
 * This container will handle all state management of the counter
 */
class CounterContainer extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    count: 0,
  }

  handlePlusPress = () => {
    const newCount = this.state.count + 1;

    this.setState({
      count: newCount,
    });
  }

  handleMinusPress = () => {
    if (this.state.count > 0) {
      const newCount = this.state.count - 1;
  
      this.setState({
        count: newCount,
      });
    }
  }

  renderExcitedText = () => {
    let result = null;

    if (this.state.count >= 10) {
      result = (
        <Text style={styles.excitedText}>We are going past 10! WOOOOO!!!</Text>
      );
    }

    return result;
  }

  render() {
    const excitedText = this.renderExcitedText();

    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <CounterActionButtonComponent label="-" onPress={this.handleMinusPress} />
          <CounterLabelComponent count={this.state.count} />
          <CounterActionButtonComponent label="+" onPress={this.handlePlusPress} />
        </View>

        {excitedText}
      </View>
    );
  }
}

export default CounterContainer;
