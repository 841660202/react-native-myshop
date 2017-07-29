import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import HomeMiddleCommonView from './HomeMiddleCommonView';
import TopMiddleData from '../../LocalData/HomeTopMiddleLeft'
const {width} = Dimensions.get('window');
export default class HomeMiddleView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*左边*/}
                {this.renderLeftView()}
                {/*右边*/}
                <View>
                    {this.renderRightView()}
                </View>
            </View>
        );
    }
    //左边的view
    renderLeftView() {
        let {dataLeft} = TopMiddleData;
        return (
            <TouchableOpacity activeOpacity={0.8}  onPress={()=>{alert('点击了')}}>
                <View style={styles.leftContain}>
                    <Image
                        source={{
                        uri: dataLeft.img1
                    }}
                        style={styles.leftImageStyle}/>
                    <Image
                        source={{
                        uri: dataLeft.img2
                    }}
                        style={styles.leftImageStyle}/>
                    <Text style={styles.leftTitleStyle}>{dataLeft.title}</Text>
                    <View style={styles.leftSubTitleContain}>
                        <Text style={styles.leftPriceStyle}>{dataLeft.price}</Text>
                        <Text style={styles.leftSaleStyle}>{dataLeft.sale}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }
    //右边的view
    renderRightView() {
        //组件数组
        let itemArr = [];
        let {dataRight} = TopMiddleData;
        for (let i = 0; i < dataRight.length; i++) {
            itemArr.push(<HomeMiddleCommonView key={i} {...dataRight[i]}/>)
        }
        return itemArr;
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'row'
    },
    leftContain: {
        backgroundColor: 'rgba(255,255,255,1)',
        width: width / 2,
        height: 121,
        marginRight: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftImageStyle: {
        width: 120,
        height: 30,
        //内容模式
        resizeMode: 'contain'
    },
    leftTitleStyle: {},
    leftSubTitleContain: {
        flexDirection: 'row'
    },
    leftPriceStyle: {
        color: 'blue',
        fontSize: 18
    },
    leftSaleStyle: {
        color: 'orange',
        fontSize: 18
    }
});
