import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class BottomCommonCell extends Component {
  static defaultProps = {
    leftIcon: '',
    leftTitle: '',
    rightTitle: ''
  };
  render() {
    return (
      <View style={styles.container}>
        {/*左边*/}
        <View style={styles.leftViewStyle}>
          <Image
            source={{
            uri: this.props.leftIcon
          }}
            style={styles.leftIconStyle}/>
          <Text>{this.props.leftTitle}</Text>
        </View>
        {/*右边*/}
        <View style={styles.rightViewStyle}>
          <Text style={styles.rightTitleStyle}>{this.props.rightTitle}</Text>

          <Image
            source={{
            uri: 'icon_cell_rightArrow'
          }}
            style={{
            width: 8,
            height: 13,
            marginRight: 8
          }}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'rgba(255,255,255,1)',
    justifyContent:'space-between',
    marginTop:20,
    marginBottom:1,
   
  },
  leftViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:8,
  },
  leftIconStyle: {
    height: 23,
    width: 23
  },
  rightTitleStyle:{
    marginRight:8,
  },
  rightViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    
  }
});
