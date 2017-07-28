import React, {Component} from 'react';
import {StyleSheet, Text, View, ListView, Image,Dimensions,TouchableOpacity} from 'react-native';
const {width}=Dimensions.get('window')

export default class TopListView extends Component {

  static defaultProps = {
    dataArr: []
  };

  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.dataArr)
    }
  }
  render() {
    return (<ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderRow}
      contentContainerStyle={styles.containeStyle}
      scrollEnabled={false}/>);
  }
  renderRow(rowdata) {
    return (
      <TouchableOpacity onPress={()=>{alert('点了')}}>  
         <View style={styles.cellStyle}>
            <Image
              source={{
              uri: rowdata.image
            }}
              style={{
              height: 52,
              width: 52
            }}/>
            <Text style={styles.titleStyle}>{rowdata.title}</Text>
        </View>
      </TouchableOpacity>  
     
    )

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
  },
  containeStyle: {
    //设置主轴的方向
    flexDirection: 'row',
    flexWrap: 'wrap',
    width:width,
  },cellStyle:{
    width:70,
    height:70,
    //水平居中 和 垂直居中
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    marginLeft:(width-70*5)/6
  },
  titleStyle:{
    fontSize:13
  }
});
