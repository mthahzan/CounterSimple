import React from 'react';
import {View, Text} from 'react-native';

import styles from './CounterLabel.styles';

export default (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {props.count}
    </Text>
  </View>
);
