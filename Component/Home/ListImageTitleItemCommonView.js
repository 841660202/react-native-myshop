import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
const {width} = Dimensions.get("window");
export default class ListImageTitleItemCommonView extends Component {
    static defaultProps = {
        bigImage: '',
        iconImage: '',
        title: '',
        distance: '',
        discribe: '',
        money: '',
        count: ''
    }
    render() {
        return (
            <View style={styles.container}>
                {/*左边*/}
                <View>
                    <Image
                        style={styles.bigImageStyle}
                        source={{
                        uri: this.props.bigImage
                    }}/>
                    <Image
                        style={styles.iconImageStyle}
                        source={{
                        uri: this.props.iconImage
                    }}/>
                </View>
                {/*右边*/}

                <View style={styles.rightContain}>
                    {/*上*/}
                    <View style={styles.rightTopContain}>
                        <Text style={styles.titleStyle}>
                            {this.props.title}</Text>
                        <Text>
                            {this.props.distance}</Text>
                    </View>
                    {/*中*/}
                    <View style={styles.rightMiddleContain}>
                        <Text style={styles.discribeStyle}>
                            {this.props.discribe}</Text>
                    </View>
                    {/*下*/}
                    <View style={styles.rightBotomContain}>
                        <Text style={styles.moneyStyle}>
                            {this.props.money}</Text>
                        <Text>
                            {this.props.count}</Text>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
        backgroundColor: "rgba(255,255,255,1)",
        marginBottom:1,
    },
    bigImageStyle: {
        width: 80,
        height: 80,
        margin: 8,
    },
    iconImageStyle: {
        width: 30,
        height: 30,
        position: 'absolute',
        left: 7,
        top: 7
    },
    rightContain: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: width - 110,
        height: 90
    },
    rightTopContain: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 18
    },
    rightMiddleContain: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    discribeStyle: {
        color: 'grey'
    },
    rightBotomContain: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    moneyStyle: {
        color: 'red'
    }
});
