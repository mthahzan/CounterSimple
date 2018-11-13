import React from 'react';
import {Text, View} from 'react-native';

import CounterContainer from './containers/counter/Counter.container';

import styles from './App.styles';

export default class App extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.intro}>Let's learn to count!</Text>
        <CounterContainer />
      </View>
    );
  }
}
