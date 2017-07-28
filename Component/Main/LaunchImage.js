import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import {StackNavigator, NavigationActions, NavigationUtil} from 'react-navigation';
import Main from '../Main/Main';
import SplashScreen from 'react-native-splash-screen';

export default class LaunchImage extends Component {
  componentDidMount() {
    SplashScreen.hide()
    // setTimeout(() => this.props.navigation.dispatch(resetAction), 100000)
  }
constructor(props){
  super(props);
}
  render() {
    return (
      <View style={styles.launchImage}>
        <StatusBar
          backgroundColor="rgba(255,255,255,0)"
          barStyle="light-content"
          translucent={true}/> 
          <Image
          source={{uri: 'launchimage'}}
          style={styles.launchImage}/>
        <TouchableOpacity onPress={() => this.props.navigation.dispatch(resetAction)} style={styles.launchBtn}>
          <Text style={styles.btn}>现在出发</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({routeName: 'Main'})]
})
const styles = StyleSheet.create({
  launchImage: {
    flex: 1
  },
  launchBtn:{
    position:'absolute',
    bottom:50,
    alignSelf:'center'
  },
  btn:{
      fontSize:32,
      backgroundColor:'rgba(255,96,0,1)',
      color:'rgba(255,255,255,1)',
      borderRadius:25,
      padding:5,

  }
});
// const A = StackNavigator({
//   LaunchImage: {
//     screen: LaunchImage,
//     navigationOptions: {
//       header: null
//     }
//   },
//   Main: {
//     screen: Main,
//     navigationOptions: {
//       header: null
//     }
//   }
// });

