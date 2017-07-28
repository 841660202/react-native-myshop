import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Switch} from 'react-native';

export default class CommonMyCell extends Component {
    static defaultProps = {
        leftIconName: '',
        leftTitle: '',
        rightIconNmae: '',
        rightTitle: ''
    };
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View style={styles.container}>
                {/*左边*/}
                <View style={styles.leftViewStyle}>
                    <Image
                        source={{
                        uri: this.props.leftIconName
                    }}
                        style={styles.leftIconStyle}/>
                    <Text style={styles.leftTitle}>{this.props.leftTitle}</Text>
                </View>
                {/*右边*/}
                <View style={styles.righttViewStyle}>
                    {this.rightSubView()}
                </View>
                
            </View>
        );
    }
    // 右边内容
    rightSubView() {
        return (
            <View style={{flexDirection:'row',alignItems:'center'}}>
                {this.renderRightContent()}
                {/*箭头*/}
                <Image
                    source={{
                    uri: 'icon_cell_rightArrow'
                }}
                    style={{
                    width: 13,
                    height: 18
                }}/>
            </View>
        )
    }
    // 右边具体返回的值
    renderRightContent() {
        if(this.props.rightIconNmae.length==0){//不返回图片
            return(
                <Text style={styles.rightTitleStyle}>{this.props.rightTitle}</Text>    
            )
        }else{
            return(
                <Image source={{uri:this.props.rightIconNmae}} 
                style={{width:23,height:13,marginRight:3,}}
                />
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        height: 44,
        backgroundColor: 'rgba(255,255,255,1)',
        borderBottomColor: '#ddd',
        borderBottomWidth: 0.3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 5,
        paddingRight: 5,
    },
    leftViewStyle: {
        flexDirection:'row',
        alignItems:'center',
    },
    leftIconStyle: {
        width:23,
        height:23,
        borderRadius:30
    },
    leftTitle: {
        marginLeft:3,
    },
    righttViewStyle: {
        flexDirection:'row',
        alignItems:'center',
    },
    rightTitleStyle:{
        marginRight:3,
    }
});
