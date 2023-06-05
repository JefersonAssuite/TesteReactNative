import React,{useState} from 'react'
import {Text} from 'react-native'
import Estilo from '../estilo'
import Filho from './Filho'


export default props => {
    const[num,setNum] = useState(0)
    const[texto,setTexto] = useState('')

    function exibirValor(numero,texto){
        setTexto(texto)
        setNum(numero)
        
    }
    return (
        <>
        <Text style={Estilo.txtG}>
            {texto}{num}
            </Text>
         <Filho
         min={1}
         max={30}
         funcao={exibirValor}
         />
    </>
        )
}