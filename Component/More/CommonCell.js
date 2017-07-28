
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
} from 'react-native';

export default class CommonCell extends Component {
    static defaultProps = {
        title: '',//标题
        isSwitch:false,
        rightTitle:'',
      
    };
    constructor(props){
      super(props);
      this.state={
        isOn:false
      }
    }
  render() {
    return (
      <View style={styles.container}>
        {/*左边*/}
        <Text style={styles.leftText}>
            {this.props.title}
        </Text>
        {/*右边*/}

       {this.renderRightView()}
      </View>
    );
  }
  renderRightView(){
      if(this.props.isSwitch){
          return(
            <Switch value={this.state.isOn===true} onValueChange={()=>this.setState({isOn:!this.state.isOn})} style={{marginRight:5}}></Switch>
          )
      }else{
         return (
         <View style={{flexDirection:'row'}}>
           {this.rightTile()}
           <Image source={{uri:'icon_cell_rightarrow'}} 
            style={styles.iconRight}
        />
         </View> 
        )
      }
  }
  rightTile(){
    if(this.props.rightTitle.length>0){
      return (
        <Text style={{color:'grey'}}>{this.props.rightTitle}</Text>  
      )

    }
  }
}

const styles = StyleSheet.create({
  container:{
    height:44,
    backgroundColor:'rgba(255,255,255,1)',
    borderBottomColor:'#ddd',
    borderBottomWidth:0.3,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingLeft:5,
    paddingRight:5,
  },
  leftText:{
    fontSize:16,
  },
  iconRight:{
    width:13,
    height:18,
  },
});





