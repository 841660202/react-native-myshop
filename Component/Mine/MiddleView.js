import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Switch,TouchableOpacity} from 'react-native';
// 导入外部json数据
import MiddleData from './MiddleData.json'
export default class MiddleView extends Component {
    static defaultProps = {
       
    };
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View style={styles.container}>
              {this.renderAllItem()}
            </View>
        );
    }
    renderAllItem(){
        let itemArry=[];
        for(let i=0;i<MiddleData.length;i++){
            let data = MiddleData[i];
            itemArry.push(
             <TouchableOpacity key={i} onPress={()=>{alert('被点击了')}}>
                <InnerView  key={i} iconName={data.iconName} title={data.title}/>
              </TouchableOpacity>  
            );
        };
        return itemArry;
    }
   
}
 class InnerView extends Component {
     static defaultProps={
        iconName:'',
        title:'',
     }
    render() {
        return (
            <View style={styles.InnerViewStyle}>
              <Image source={{uri:this.props.iconName}} style={styles.innerImageStyle}/>
              <Text>{this.props.title}</Text>
            </View>
        );
    }
  
   
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 88,
        backgroundColor: 'rgba(255,255,255,1)',
        borderBottomColor: '#ddd',
        borderBottomWidth: 0.3,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    innerImageStyle:{
        width:40,
        height:30
    },
    InnerViewStyle:{
        alignItems:'center'
    },
  
});
