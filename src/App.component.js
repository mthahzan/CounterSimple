import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import styles from './App.styles';

export default class App extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
    );
  }
}
