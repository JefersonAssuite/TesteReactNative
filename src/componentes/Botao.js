import React from 'react'
import {Button,View} from 'react-native'


export default props=>{
    function executa(){
        console.warn("Botão Pressionado ")
    }
    return(
        <Button title="Executar" onPress={executa}/>
    )
}