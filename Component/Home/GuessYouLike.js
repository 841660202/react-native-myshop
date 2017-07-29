import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import BottomCommonCell from './BottomCommonCell'
import ListImageTitleItemCommonView from './ListImageTitleItemCommonView'
import gyl from '../../LocalData/gyl.json'
export default class GuessYouLike extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
          alert("点击了")
        }}>
          <BottomCommonCell leftIcon='cnxh' leftTitle='猜你喜欢'/>
        </TouchableOpacity>

        <ScrollView>
          {this.GuessYouLikeChildren()}
        </ScrollView>
      </View>
    );
  }
  GuessYouLikeChildren() {
    const {data} = gyl;
    let GuessYouLikeArr = [];
    for (let i = 0; i < data.length; i++) {
      GuessYouLikeArr.push(
        <TouchableOpacity
          key={i}
          activeOpacity={0.5}
          onPress={() => {
          alert("点击了")
        }}>
          <ListImageTitleItemCommonView {...data[i]}/>
        </TouchableOpacity>
      )
    }
    return GuessYouLikeArr
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
  }
});
