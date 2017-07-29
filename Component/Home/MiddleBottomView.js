import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Home_D4 from '../../LocalData/Home_D4.json'
import HomeMiddleCommonView from './HomeMiddleCommonView';
const {width} = Dimensions.get('window');

export default class MiddleBottomView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <View style={styles.topViewStyle}></View>
                {/*下部分*/}
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomItem()}
                </View>

            </View>
        );
    }
    //下部分的所有子组件
    renderBottomItem() {
        //组件数组
        let itemArr = [];
        //拿到对应的数据
        let {data} = Home_D4;
        //遍历
        for (let i = 0; i < data.length; i++) {
            let itemData = data[i];
            itemArr.push(
                <View style={styles.itemBottomStyle} key={i}>
                    <HomeMiddleCommonView 
                        title={itemData.maintitle}
                        subTitle={itemData.deputytitle}
                        rightImage={itemData.imageurl}
                        titleColor={itemData.typeface_color}
                        />

                </View>

            )
        }
        return itemArr
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#F5FCFF',
        marginTop: 20
    },
    topViewStyle: {},
    bottomViewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    itemBottomStyle: {
        marginRight: 1,
        width: width / 2-1,

    }
});
