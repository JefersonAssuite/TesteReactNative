import React, {useState}from 'react'
import {Text, TextInput,View} from 'react-native'
import Estilo from './estilo'


export default props => {
    const [nome,setNome]=useState('Teste')
    return (
        <View>
         <TextInput
         value={nome}
         placeholder='Digite Seu Nome:'
         onChangeText={nome=>setNome(nome)}
         />
         </View>
        )
}