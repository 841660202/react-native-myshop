import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import BottomCommonCell from './BottomCommonCell'
import ShopCenterItem from './ShopCenterItem'
import Home_D5 from '../../LocalData/Home_D5.json'

export default class ShopCenter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
          alert("点击了")
        }}>
          <BottomCommonCell leftIcon='gw' leftTitle='购物中心' rightTitle={Home_D5.tips}/>
        </TouchableOpacity>
        <ScrollView
          style={styles.shopScrollStyle}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {this.renderShopItem()}
        </ScrollView>
      </View>
    );
  }
  //返回下部所有商店
  renderShopItem() {
    let shopArr = [];
    let {data} = Home_D5;
    for (let i = 0; i < data.length; i++) {
      let dataItem = data[i];
      shopArr.push(
        <TouchableOpacity
          key={i}
          activeOpacity={0.5}
          onPress={() => {
          alert("点击了")
        }}>
          <ShopCenterItem
            shopImage={dataItem.img}
            shopSale={dataItem.showtext.text}
            shopName={dataItem.name}/>
        </TouchableOpacity>
      )
    }
    return shopArr;
  }
}

const styles = StyleSheet.create({
  container: {},
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  shopScrollStyle: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,1)'
  }
});
