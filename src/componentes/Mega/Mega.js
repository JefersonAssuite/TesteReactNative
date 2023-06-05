import React,{Component} from "react"
import {Button, Text, TextInput,View} from"react-native"
import MegaNumero from "./MegaNumero"
import estilo from "../estilo"

export default class Mega extends Component {

    state={
        qtdeNumeros: this.props.qtdeNumeros,
        numeros:[]
    }

    AlterarQtdeNumero = (qtde)=>{
        this.setState({qtdeNumeros: +qtde})
        
    }
    gerarNumeroNaoContido= nums =>{
        const novo = parseInt(Math.random()*60)+1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = ()=>{
        const {qtdeNumeros} = this.state
        const numeros = []

        for(let i=0 ; i< qtdeNumeros ; i++){
            const n =this.gerarNumeroNaoContido(numeros)
            numeros.push(n)
        }

        numeros.sort((a,b) =>a-b)
        this.setState({numeros})
    }

    exibirNumeros=()=>{
        const nums= this.state.numeros
        return nums.map(num=>{
                return <MegaNumero num={num}/>
            })
        
    }
    render(){
        
        return(
            <>
            <Text style={estilo.txtG}>
                 Gerador Mega Sena 
                       
                </Text>
                <TextInput
                style={{borderBottomWidth:1}}
                keyboardType={"numeric"}
                placeholder="Digite um Número"
                value={`${this.state.qtdeNumeros}`}
                onChangeText={this.AlterarQtdeNumero}
                />
                <Text>
                    {this.state.numeros.join(',')}
                </Text>
                <Button
                title='Executar'
                onPress={this.gerarNumeros}
                />
                <View style={{
                    flexDirection:'row',
                    flexWrap:'wrap',
                    justifyContent:'center',
                    marginTop:5

                }}>
            {this.exibirNumeros()}
            </View>
            </>
            
        )
    }
}

