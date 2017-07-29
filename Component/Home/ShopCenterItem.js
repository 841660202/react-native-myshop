import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
//每一个商场
export default class ShopCenterItem extends Component {
    static defaultProps = {
        shopImage: '',
        shopSale: '',
        shopName: ''
    };
    render() {
        return (
            <TouchableOpacity>
                <View style={styles.container}>
                    <Image
                        source={{
                        uri: this.props.shopImage
                    }}
                        style={styles.shopImageStyle}/>
                    <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
                    <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
                </View>

            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginRight: 8,
        padding: 8,
        alignItems: 'center'
    },
    shopImageStyle: {
        width: 160,
        height: 100
    },
    shopSaleStyle: {
        position: 'absolute',
        bottom: 30,
        left: 9,
        backgroundColor: 'orange',
        borderRadius: 5,
        color: 'rgba(255,255,255,1)'
    },
    shopNameStyle: {
        marginTop: 3,
    }
});
