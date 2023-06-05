import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

import If from './if'

export default ({usuario = {} }) => {
    return (
        <>
        <If teste= {usuario && usuario.nome && usuario.email}>
        
        <Text style={Estilo.txtG}>Usuario Logado</Text>
        <Text style={Estilo.txtG}>
        {usuario.nome} - {usuario.email}
        </Text>
        
        </If>
        </>
        )
}