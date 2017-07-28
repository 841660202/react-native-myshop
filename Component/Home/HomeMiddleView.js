import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomeMiddleCommonView from './HomeMiddleCommonView';
import TopMiddleData from '../../LocalData/HomeTopMiddleLeft'
export default class HomeMiddleView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*左边*/}
                {this.renderLeftView()}
                {/*右边*/}
                {this.renderRightView()}
            </View>
        );
    }
    //左边的view
    renderLeftView() {}
    //右边的view
    renderRightView() {
        //组件数组
        let itemArr = [];
        let {dataRight}=TopMiddleData;
        for (let i = 0; i < dataRight.length; i++) {
            itemArr.push(
                <HomeMiddleCommonView key={i}
                   {...dataRight[i]}
                
                />
            )
        }
        return itemArr;
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:20,
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
    }
});
