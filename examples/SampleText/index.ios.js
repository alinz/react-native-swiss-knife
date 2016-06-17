/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules
} from 'react-native';

import * as RNSK from 'react-native-swiss-knife'

class SampleText extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      size: { width: 0, height: 0 }
    }
  }

  async componentDidMount() {
    const size = await RNSK.Text.calcSize("Hello", "Helvetica", 40)
    this.setState({ size })
  }

  render() {
    const { size } = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          size is {JSON.stringify(size)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SampleText', () => SampleText);
