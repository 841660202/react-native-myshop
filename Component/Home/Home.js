import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  StatusBar,
  ScrollView
} from 'react-native';
let {width, height} = Dimensions.get('window');
import HomeDetail from './HomeDetail';
import TopView from './TopView';
import HomeMiddleView from './HomeMiddleView';
import MiddleBottomView from './MiddleBottomView';
import ShopCenter from './ShopCenter';
import GuessYouLike from './GuessYouLike';

import {StackNavigator, NavigationActions, NavigationUtil} from 'react-navigation';
export default class Home extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
      
    }
  render() {
    return (
      <View style={styles.container}>
        {/*首页导航条*/}
        {this.renderNavBar()}

        {/*首页的主要内容*/}
        <ScrollView>
          {/*头部view*/}
          <TopView/> 
          {/*中间的内容*/}
          <HomeMiddleView/>
          {/*中下*/}
          <MiddleBottomView/>
          {/*购物中心*/}
          <ShopCenter/>
          {/*猜你喜欢*/}
          <GuessYouLike/>
        </ScrollView>

      </View>
    );
  }
  /*--------渲染导航条------- */
  renderNavBar() {
    
    return (
      <View style={styles.navBarStyle}>
        <StatusBar
         StatusBarAnimation={'fade'}
          backgroundColor="rgba(255,96,0,1)"
          barStyle="light-content"
          translucent
          ={true}></StatusBar>
        {/*首页导航条*/}
        <TouchableOpacity onPress={() => {
          alert('城市选取')
        }}>
          <View
            style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Text style={styles.navCityStyle}>广州</Text>
            <Image
              source={{
              uri: 'icon_homepage_down_arrow'
            }}
              style={styles.navArrowImgStyle}/>
          </View>
        </TouchableOpacity>
        {/*中间*/}
        <TextInput
          placeholder='输入商家、品类、商圈'
          underlineColorAndroid='transparent'
          style={styles.topInputStyle}></TextInput>
        {/*右边*/}
        <View style={{
          flexDirection: 'row'
        }}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('HomeDetail')
          }}>
            <Image
              source={{
              uri: 'icon_homepage_message'
            }}
              style={styles.navRightImgStyle}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            alert('扫描')
          }}>
            <Image
              source={{
              uri: 'icon_homepage_scan'
            }}
              style={styles.navRightImgStyle}/>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  navBarStyle: {
    // height:66,//无法更改底部
    paddingTop: 30,
    paddingBottom: 10,
    // marginTop:56,//无法更改底部且是外边距
    backgroundColor: 'rgba(255,96,0,1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  navCityStyle: {
    color: 'rgba(255,255,255,1)',
    marginRight: 3
  },
  navArrowImgStyle: {
    width: 15,
    height: 15
  },
  topInputStyle: {
    width:width *0.6,
    height: 35,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 30,
    paddingLeft: 10,
    fontSize: 13
  },
  navRightImgStyle: {
    width: 30,
    height: 30,
    marginRight: 5
  },
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
