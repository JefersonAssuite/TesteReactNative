import React from 'react'
import{StyleSheet, View} from 'react-native'

//import FlexBoxV2 from './componentes/layout/FlexBoxV2'
//import FlexBoxV4 from './componentes/layout/FlexBoxV4'
//import UsuarioLogado from './componentes/UsuarioLogado'
// import MinMax from './componentes/MinMax'
// import Aleatorio from './componentes/Aleatorio'
// import Primeiro from './componentes/Primeiro'
// import{Comp,Comp1,Comp2} from './componentes/Multi'
// import Titulo from './componentes/Titulo'
//import Contador from './componentes/Contador'
//import Teste from './componentes/teste'
// comentário
//import Pai from './componentes/indireta/Pai'
//import ContadorV2 from './componentes/contador/ContadorV2'
//import ParImpar from './componentes/ParImpar'
//import Familia from './componentes/relacao/Familia'
//import Membro from './componentes/relacao/Membro'
//import ListadeProdutos from './componentes/produtosLista/ListadeProdutos'
//import ListadeProdutosV2 from './componentes/produtosLista/ListadeProdutosV2'
//import DigiteSeuNome from './componentes/DigiteSeuNome'
//import FlexBoxV1 from './componentes/layout/FlexBoxV1'
import Mega from './componentes/Mega/Mega'

export default () => (
<View style={style.App}>
    <Mega qtdeNumeros={0}/>
    {/* <MinMax min="3" max="80"/> 
    <FlexBoxV4/>
    <FlexBoxV2/>
    <FlexBoxV1/>
   <DigiteSeuNome/>
    <ListadeProdutosV2/>
    <ListadeProdutos/>
    <UsuarioLogado usuario={{nome:"Jef", email:"jef@gmail.com"}}/>
    <Familia>
        <Membro nome={"Ana"} sobrenome={"Silva"}/>
        <Membro nome={"Felipe"} sobrenome={"Silva"}/>
    </Familia>
    <Familia>
        <Membro nome={"Jef"} sobrenome={"Assuite"}/>
        <Membro nome={"Katia"} sobrenome={"Assuite"}/>
    </Familia>
    <ParImpar num ={2}/>
    <ContadorV2/>
    <Pai/>
    <Teste/>
    <Contador inicial={100} passo={20}/>
    <Button/>
     <Titulo principal="Cadastro"
        secundario="Tela de Cadastro"/> 
     <Aleatorio min="10" max="100"/> 
    <Primeiro />
    <Comp />
    <Comp1 />
    <Comp2 /> */}

    </View>
)

const style = StyleSheet.create({
    App:{
       justifyContent:'center',
        alignItems:'center',
        flex:1,
        padding: 20
    }
})
