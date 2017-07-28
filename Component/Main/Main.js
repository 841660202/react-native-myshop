
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
let {width,height}=Dimensions.get('window');
/*----------------导入外部组件------------------ */

import {StackNavigator, NavigationActions, NavigationUtil,StackNavigatorConfig } from 'react-navigation';

import TabNavigator from 'react-native-tab-navigator';
import Home from '../Home/Home';
import Shop from '../Shop/Shop';
import Mine from '../Mine/Mine';
import More from '../More/More';
export default class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedTab:'home'
        }
    }
  render() {
    return (
        <TabNavigator >
           { /**主页 */}
            {/*<TabNavigator.Item
                selected={this.state.selectedTab === 'home'}
                title="主页"
                renderIcon={() => <Image source={{uri:'icon_tabbar_homepage'}} style={styles.iconStyle}/>}
                renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_homepage_selected'}} style={styles.iconStyle}/>}
                //badgeText="1"
                onPress={() => this.setState({ selectedTab: 'home' })}
                selectedTitleStyle={styles.selectedTabText} 
                >
            <Home/>
            </TabNavigator.Item>*/}
             { /**商家 */}
            {/*<TabNavigator.Item
                selected={this.state.selectedTab === 'Shop'}
                title="商家"
                renderIcon={() => <Image source={{uri:'icon_tabbar_merchant_normal'}} style={styles.iconStyle}/>}
                renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_merchant_selected'}} style={styles.iconStyle}/>}
            // renderBadge={() => {}}
                onPress={() => this.setState({ selectedTab: 'Shop' })}
                selectedTitleStyle={styles.selectedTabText}
                >
                <Shop/>
            </TabNavigator.Item>*/}
             { /**我的 */}
            {/*<TabNavigator.Item
                selected={this.state.selectedTab === 'Mine'}
                title="我的"
                renderIcon={() => <Image source={{uri:'icon_tabbar_mine'}} style={styles.iconStyle}/>}
                renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_mine_selected'}} style={styles.iconStyle}/>}
            // renderBadge={() => {}}
                onPress={() => this.setState({ selectedTab: 'Mine' })}
                selectedTitleStyle={styles.selectedTabText}
                >
                <Mine/>
            </TabNavigator.Item>*/}
             
            { /**更多 */}
            {/*<TabNavigator.Item
                selected={this.state.selectedTab === 'More'}
                title="更多"
                renderIcon={() => <Image source={{uri:'icon_tabbar_misc'}} style={styles.iconStyle}/>}
                renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_misc_selected'}} style={styles.iconStyle}/>}
            // renderBadge={() => {}}
                onPress={() => this.setState({ selectedTab: 'More' })}
                selectedTitleStyle={styles.selectedTabText}
                >
                <More/>
            </TabNavigator.Item>*/}
            {this.renderTabBarItem("首页",'icon_tabbar_homepage','icon_tabbar_homepage_selected','home','首页',Home)}
            { /**商家 */}
            {this.renderTabBarItem("商家",'icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','Shop','商家',Shop)}
            { /**我的 */}
            {this.renderTabBarItem("我的",'icon_tabbar_mine','icon_tabbar_mine_selected','Mine','我的',Mine)}
            { /**更多 */}
            {this.renderTabBarItem("更多",'icon_tabbar_misc','icon_tabbar_misc_selected','More','更多',More)}
        </TabNavigator>
    );
  }
  //每一个TabBarItem
  renderTabBarItem(title,IconName,SlectedIconName,SlectedTab,componentNmae,Component){
      return(
             <TabNavigator.Item
                title={title}
                renderIcon={() => <Image source={{uri:IconName}} style={styles.iconStyle}/>}
                renderSelectedIcon={() => <Image source={{uri:SlectedIconName}} style={styles.iconStyle}/>}
                selected={this.state.selectedTab === SlectedTab}
                onPress={() => this.setState({ selectedTab: SlectedTab })}
                selectedTitleStyle={styles.selectedTabText} 
                >
                <Component/>
            </TabNavigator.Item>
      )
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tabNavigatorStyle:{
      backgroundColor:'rgba(22,22,255,0.5)'
  },
  selectedTabText:{
      color:'rgba(230,86,0,1)'
  }
  ,
 iconStyle:{
     height:25,
     width:25,
 }
});





