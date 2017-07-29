/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, StatusBar} from 'react-native';
/*---------------------导入外部组件------------------- */
import {StackNavigator} from 'react-navigation';
import Main from './Component/Main/Main';
import HomeDetail from './Component/Home/HomeDetail';
import LaunchImage from './Component/Main/LaunchImage';

// import SplashScreen from 'react-native-splash-screen';

export default class SimbleApp extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //这里根本就不走，好心酸
    // SplashScreen.hide()
    // alert(1)
  }
  render() {
    return (
    <LaunchImage/>
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

AppRegistry.registerComponent('shop', () => SimbleApp);
