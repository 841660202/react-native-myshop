
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import HeaderView from './HeaderView';
import MiddleView from './MiddleView';
import CommonMyCell from './CommonMyCell';

export default class Mine extends Component {
  render() {
    return (
      <View style={styles.container}>
         <HeaderView/>
        <ScrollView style={{ flex: 1,}}>

         {/*订单*/}
          <TouchableOpacity activeOpacity={0.5}>
             <View  style={{marginTop:16}}>
              <CommonMyCell
                leftIconName='collect'
                leftTitle='我的订单'
                rightTitle='查看全部订单'
              
              />
            </View>
          </TouchableOpacity>
          {/*中间部分*/}

          <MiddleView />


          <TouchableOpacity activeOpacity={0.5}>
             <View  style={{marginTop:16}}>
              <CommonMyCell
                leftIconName='pay'
                leftTitle='钱包'
                rightTitle='账户余额：¥1,000,000.00'
              
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
             <View  style={{marginTop:16}}>
              <CommonMyCell
                leftIconName='like'
                leftTitle='抵用券'
                rightTitle='10000张'
              
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
             <View  style={{marginTop:16}}>
              <CommonMyCell
                leftIconName='draft'
                leftTitle='积分商城'
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
             <View  style={{marginTop:16}}>
              <CommonMyCell
                leftIconName='rm'
                leftTitle='今日推荐'
                rightIconNmae='me_new'
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
             <View  style={{marginTop:16}}>
              <CommonMyCell
                leftIconName='new_friend'
                leftTitle='我要合作'
                rightTitle='轻松开店,招财进宝'
              
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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





