import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './CounterActionButton.styles';

export default (props) => (
  <TouchableOpacity style={styles.container} onPress={props.onPress}>
    <Text style={styles.text}>
      {props.label}
    </Text>
  </TouchableOpacity>
);
