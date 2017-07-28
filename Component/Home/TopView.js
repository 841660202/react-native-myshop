import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import TopListView from "./TopListView"
import TopMenu from '../../LocalData/TopMenu.json'
const {width} = Dimensions.get('window')
export default class TopView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 0
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {/*内容部分*/}

                <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} // 一帧滚动完毕
                    onMomentumScrollEnd={(e) => this.onScrollAnimationEnd(e)} style={styles.scrollViewStyle}>
                    {this.renderScrollItem()}

                </ScrollView>

                {/*页码部分*/}
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicator()}
                </View>

            </View>
        );
    }
    //   scrollview 内部的东西
    renderScrollItem() {
        //组件数组
        let itemArr = [];
        //颜色数组
        let dataArr = TopMenu.data;
        //遍历创建组件
        for (let i = 0; i < dataArr.length; i++) {
            //生成组件数组
            itemArr.push(<TopListView key={i} dataArr={dataArr[i]}/>)
        }
        //返回组件数组
        return itemArr;
    }
    //页码指示器
    renderIndicator() {
        //指示器数组
        let indicatorArr = [];
        //遍历创建组件
        for (let i = 0; i < 2; i++) {
            //设置圆点的样式
            style = (i === this.state.activePage)
                ? {
                    color: 'orange'
                }
                : {
                    color: 'grey'
                }
            indicatorArr.push(
                <Text
                    key={i}
                    style={[
                    {
                        fontSize: 25
                    },
                    style
                ]}>&bull;</Text>
            )
        }
        return indicatorArr;

    }
    //当一帧滚动完毕调用
    onScrollAnimationEnd(e) {

        //求出当前的页码
        let currentPage = Math.ceil(e.nativeEvent.contentOffset.x / width);
        //更新状态机

        this.setState({activePage: currentPage})
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:
        // '#F5FCFF',
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
    indicatorViewStyle: {
        //改变主轴的方向
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,1)'
    },
    scrollViewStyle: {
        backgroundColor: 'rgba(255,255,255,1)'
    }
});
