import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
let {width, height} = Dimensions.get('window');
/*----------------导入外部组件------------------ */

import {StackNavigator, TabNavigator, NavigationActions, NavigationUtil, StackNavigatorConfig} from 'react-navigation';

import Home from '../Home/Home';
import Shop from '../Shop/Shop';
import Mine from '../Mine/Mine';
import More from '../More/More';
import HomeDetail from '../Home/HomeDetail'
// class Main extends Component {     constructor(props) {         super(props);
//         this.state = {             selectedTab: 'home'         }     } //
// componentDidMount() {     //     alert( this.props.navigation)     // }
// render() {         return (             <TabNavigator > {/**主页 */}
// {/*<TabNavigator.Item selected={this.state.selectedTab === 'home'}
// title="主页"           renderIcon={() => <Image
// source={{uri:'icon_tabbar_homepage'}} style={styles.iconStyle}/>}
// renderSelectedIcon={() => <Image
// source={{uri:'icon_tabbar_homepage_selected'}} style={styles.iconStyle}/>}
//        //badgeText="1"                 onPress={() => this.setState({
// selectedTab: 'home' })} selectedTitleStyle={styles.selectedTabText}       >
// <Home/>             </TabNavigator.Item>*/}                 {/**商家 */}
//   {/*<TabNavigator.Item selected={this.state.selectedTab === 'Shop'}
//        title="商家"           renderIcon={() => <Image
// source={{uri:'icon_tabbar_merchant_normal'}} style={styles.iconStyle}/>}
//  renderSelectedIcon={() => <Image
// source={{uri:'icon_tabbar_merchant_selected'}} style={styles.iconStyle}/>}
//    // renderBadge={() => {}}                 onPress={() => this.setState({
// selectedTab: 'Shop' })} selectedTitleStyle={styles.selectedTabText}
//       > <Shop/>     </TabNavigator.Item>*/}                 {/**我的 */}
// {/*<TabNavigator.Item selected={this.state.selectedTab === 'Mine'}
// title="我的"           renderIcon={() => <Image
// source={{uri:'icon_tabbar_mine'}} style={styles.iconStyle}/>}
// renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_mine_selected'}}
// style={styles.iconStyle}/>}      // renderBadge={() => {}} onPress={() =>
// this.setState({ selectedTab: 'Mine' })}
// selectedTitleStyle={styles.selectedTabText}                 > <Mine/>
// </TabNavigator.Item>*/}                 {/**更多 */} {/*<TabNavigator.Item
// selected={this.state.selectedTab === 'More'}      title="更多"
// renderIcon={() => <Image source={{uri:'icon_tabbar_misc'}}
// style={styles.iconStyle}/>} renderSelectedIcon={() => <Image
// source={{uri:'icon_tabbar_misc_selected'}} style={styles.iconStyle}/>}
// // renderBadge={() => {}} onPress={() => this.setState({ selectedTab: 'More'
// })} selectedTitleStyle={styles.selectedTabText}                 > <More/>
// </TabNavigator.Item>*/} {this.renderTabBarItem("首页", 'icon_tabbar_homepage',
// 'icon_tabbar_homepage_selected', 'home', '首页', Home)}                 {/**商家
// */}                 {this.renderTabBarItem("商家",
// 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected', 'Shop', '商家',
// Shop)}                 {/**我的 */} {this.renderTabBarItem("我的",
// 'icon_tabbar_mine', 'icon_tabbar_mine_selected', 'Mine', '我的', Mine)}
// {/**更多 */} {this.renderTabBarItem("更多", 'icon_tabbar_misc',
// 'icon_tabbar_misc_selected', 'More', '更多', More)}             </TabNavigator>
//         );     } //每一个TabBarItem     renderTabBarItem(title, IconName,
// SlectedIconName, SlectedTab, componentNmae, Component) {         return (
// <TabNavigator.Item                 title={title} renderIcon={() => <Image
//         source={{                 uri: IconName             }}
// style={styles.iconStyle}/>}       renderSelectedIcon={() => <Image
// source={{    uri: SlectedIconName             }} style={styles.iconStyle}/>}
//                selected={this.state.selectedTab === SlectedTab}
//   onPress={() => this.setState({selectedTab: SlectedTab})}
// selectedTitleStyle={styles.selectedTabText}>           <Component/>
//   </TabNavigator.Item>         )     } } const styles = StyleSheet.create({
//   container: {         flex: 1, justifyContent: 'center',         alignItems:
// 'center', backgroundColor: '#F5FCFF'     },     tabNavigatorStyle: {
// backgroundColor: 'rgba(22,22,255,0.5)'     },     selectedTabText: { color:
// 'rgba(230,86,0,1)'     },     iconStyle: {         height: 25, width: 25
// } });

const Tab = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: { // 也可以写在组件的static navigationOptions内

            tabBarLabel: '首页',
            tabBarIcon: ({tintColor}) => (<Image
                source={{
                uri: 'icon_tabbar_homepage'
            }}
                style={[
                {
                    tintColor: tintColor
                },
                styles.icon
            ]}/>)

        }
    },
    Shop: {
        screen: Shop,
        navigationOptions: {

            tabBarLabel: '商家',
            tabBarIcon: ({tintColor}) => (<Image
                source={{
                uri: 'icon_tabbar_merchant_normal'
            }}
                style={[
                {
                    tintColor: tintColor
                },
                styles.icon
            ]}/>)

        }
    },
    Mine: {
        screen: Mine,
        navigationOptions: {

            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => (<Image
                source={{
                uri: 'icon_tabbar_mine'
            }}
                style={[
                {
                    tintColor: tintColor
                },
                styles.icon
            ]}/>)
        }

    },
    More: {
        screen: More,
        navigationOptions: {

            tabBarLabel: '更多',
            tabBarIcon: ({tintColor}) => (<Image
                source={{
                uri: 'icon_tabbar_misc'
            }}
                style={[
                {
                    tintColor: tintColor
                },
                styles.icon
            ]}/>)

        }
    }
}, {
    animationEnabled: true, // 切换页面时是否有动画效果
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#ff8500', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片未选中颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0 // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: 'rgba(255,255,255,1)', // TabBar 背景色
            // height: 44
        },
        labelStyle: {
            fontSize: 10, // 文字大小
        },
        tabStyle:{
            height:60,
            paddingBottom:0,
        
        }
    }
});
const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
        resizeMode:'contain'
    }
});
const Main = StackNavigator({
  Tab: {
    screen: Tab,
     navigationOptions: {
      header: null,
      headerMode :'none'
    }
  },
  HomeDetail: {
    screen: HomeDetail,
     navigationOptions: {
      headerMode :'none'
    }
  },
});
export default Main;
