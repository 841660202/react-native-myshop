import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Switch,
    TouchableOpacity,
    Dimensions
} from 'react-native';
let {height, width} = Dimensions.get('window');
export default class HeaderView extends Component {
    static defaultProps = {};
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                {this.renderTopView()}
                {/*下部分*/}
                <View style={styles.renderBottomViewContainStyle}>
                    {this.renderBottomView()}
                </View>
            </View>
        );
    }
    // 上部分
    renderTopView() {

        return (
            <View style={styles.hearTopContain}>
                <View style={styles.leftView}>
                    <TouchableOpacity activeOpacity={0.6}>   
                        <Image source={{uri: 'header'}}
                            style={styles.headerImageStyle}/>
                    </TouchableOpacity>   
                   <TouchableOpacity activeOpacity={0.6} style={{flexDirection:'row',width:width-120,justifyContent:'space-between'}}>   
                        <Text style={styles.headerText}>哥、豪土</Text>
                        <Image
                            source={{uri: 'icon_cell_rightArrow'}} style={{width: 13,height: 18}}/>
                    </TouchableOpacity>   
                   
                </View>
                
            </View >
        )
    }
    //下部分
    renderBottomView() {
        // 数组
        let itemArry = [];
        // 数据数组
        const data = [
            {
                "title": "抵扣券",
                "number": 10
            }, {
                "title": "评价",
                "number": 100
            }, {
                "title": "收藏",
                "number": 1000
            }
        ];
        //遍历创建组件装入数组


        for(let i =0;i<data.length;i++){
            let item =data[i];
            itemArry.push(
                <TouchableOpacity key={i} style={styles.subItemStyle}>        
                    <Text style={styles.subItemTextStyle}>{item.title}</Text>
                    <Text style={styles.subItemTextStyle}>{item.number}</Text>
                </TouchableOpacity>    
            )
        }
        return itemArry;
    }

}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        height: 160,
        backgroundColor: 'rgba(255,96,0,1)',
        borderBottomColor: '#ddd'
    },
    hearTopContain: {
        width: width*0.9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    leftView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    headerImageStyle: {
        width: 80,
        height: 80,
        borderRadius: 50
    },
    headerText: {
        color: 'rgba(255,255,255,1)',
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 5
    },
    renderBottomViewContainStyle:{
        flexDirection:'row',
        position:'absolute',
        bottom:0,
    },
    subItemStyle:{
        alignItems:'center',
        width:width/3,
        backgroundColor:'rgba(255,255,255,0.2)',
        borderLeftWidth:0.5,
    },
    subItemTextStyle:{
         color:'rgba(255,255,255,1)',
    },

});
