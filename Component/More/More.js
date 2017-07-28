
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import CommonCell from './CommonCell'
export default class More extends Component {
  render() {
    return (
      <View style={styles.container}>
          {/*导航条*/}
          {this.renderNavBar()}
       <ScrollView>
         <TouchableOpacity activeOpacity={0.5}>
          <View style={{marginTop:16,}}>
            <CommonCell
              title="扫一扫"
          
           />
          </View>
         </TouchableOpacity>
          <View style={{marginTop:16,}}>
            <CommonCell
              title="省流量模式"
              isSwitch={true}
              />
          </View>
        <TouchableOpacity activeOpacity={0.5}>
          <View>
            <CommonCell
              title="消息提醒"
              
              />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <View>
            <CommonCell
              title="邀请好友"
          
              />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
         <View>
           <CommonCell
            title="清空缓存"
            rightTitle='1.99M'
          />
         </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={{marginTop:16,}}>
            <CommonCell
              title="意见反馈"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <View>
            <CommonCell
              title="问卷调查"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <View>
            <CommonCell
              title="支付帮助"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <View>
            <CommonCell
              title="网络诊断"
            />
         </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <View>
            <CommonCell
              title="关于平台"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <View>
            <CommonCell
              title="我要应聘"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={{marginTop:16,marginBottom:16}}>
            <CommonCell
              title="精品应用"
            />
          </View>
        </TouchableOpacity>
       </ScrollView>
        
      </View>
    );
  }
  renderNavBar(){
    return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>更多</Text>
      <TouchableOpacity onPress={()=>{alert("点击了")}} style={styles.viewStyle}>
        <Image source={{uri:'icon_mine_setting'}} style={styles.navImageStyle}/>
      </TouchableOpacity>
      
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
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
  titleContainer:{
    paddingTop:30,
    paddingBottom:10,
    flexDirection:'row',
    backgroundColor:'rgba(255,96,0,1)',
    justifyContent:'center',
  },
  viewStyle:{
    position:'absolute',
    right:10,
    bottom:10,
  },
  navImageStyle:{
    width:25,
    height:25,
  },
  titleText:{
    fontSize:20,
    color:'rgba(255,255,255,1)',
    fontWeight:'bold'
  }
});





