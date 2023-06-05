import React from 'react'
import {View,Text} from 'react-native'
import Estilo from './estilo'

export default ({num=0}) => {

    const estrutura =(result)=>{
        return(
        <View>
            <Text style={Estilo.txtG}>
                O resultado é :{result}
            </Text>
        </View>
        )
    }
    
    if(num % 2 === 0){
        return (
            estrutura("Par")
           )
    } else {
        return(
           estrutura("Ímpar")
        )
    }
    
}