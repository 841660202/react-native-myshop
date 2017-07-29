import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
const {width} = Dimensions.get('window');
export default class HomeMiddleCommonView extends Component {
  //外界传的数据
  static defaultProps = {
    title: '',
    subTitle: '',
    rightImage: '',
    titleColor: ''
  };
  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => {
        alert("点了")
      }}>
        <View style={styles.container}>
          {/*左边*/}
          {/*右边*/}
          <View>
            <Text
              style={[
              {
                color: this.props.titleColor
              },
              styles.titleStyle
            ]}>{this.props.title}</Text>
            <Text stye={styles.subTitleStyle}>{this.props.subTitle}</Text>

          </View>
          <Image
            source={{
            uri: this.props.rightImage
          }}
            style={styles.rightImageStyle}/>

        </View>
      </TouchableOpacity>

    );
  }
  //左边的view
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    width: width / 2 - 1,
    height: 60,
    marginBottom: 1,
    //改变主轴方向
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  rightImageStyle: {
    width: 64,
    height: 43
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  subTitleStyle: {
    color: 'grey'
  }
});
