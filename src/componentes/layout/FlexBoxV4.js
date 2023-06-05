import React from 'react'
import {View,StyleSheet} from 'react-native'


export default props => {
    
    return (
        <View style={style.FlexV4}>
            <View style={style.V1}/>
            <View style={style.V2}/>
        </View>
        )
}

const style = StyleSheet.create({
    
    FlexV4:{
        flex:1,
        width:100,
        backgroundColor:'#000',
        
    },
    V1:{
        backgroundColor:'#ff801a',
        flex:1
    },
    V2:{
        backgroundColor:'#50d1f6',
        flex:1
    }

    })
