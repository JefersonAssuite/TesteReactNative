import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Estilo from './estilo'

export default param=>(
    <Text style={Estilo.txtG}>
    O valor de {param.max} é maior que o Valor de {param.min} 
    </Text>
)

