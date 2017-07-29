import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

export default class HomeDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          StatusBarAnimation={'fade'}
          backgroundColor="rgba(255,96,0,1)"
          barStyle="light-content"
          translucent
          ={false}></StatusBar>
        <Text style={styles.welcome}>
          主页详情
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
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
