import React from 'react';
import {View, Text} from 'react-native';

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

  render() {
    return (
      <View>
        <Text>
          Counter
        </Text>
      </View>
    );
  }
}

export default CounterContainer;
