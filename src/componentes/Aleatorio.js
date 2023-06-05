import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

export default random=>{
    const {min, max} = random
    const delta = max - min +1
    const aleatorio = parseInt(Math.random()*delta)
    return(
    <Text style={Estilo.txtG}>
        O valor aleatório entre {min} e {max} é = {aleatorio}
    </Text>
    )
    }
