import React,{useState} from 'react'
import {Button, Text} from 'react-native'
import Estilo from'./estilo'

export default props=>{
   
   
    const [numero,setNumero] = useState(props.inicial)
   //let numero =props.inicial

    const inc = () =>setNumero(numero+props.passo)
    const dec = () =>setNumero(numero-props.passo)

    return (
    <>
    <Text style={Estilo.txtG}>{numero}</Text>
    <Button title="+" onPress={inc}/>
    <Button title='-' onPress={dec}/>
    </>
    )
}