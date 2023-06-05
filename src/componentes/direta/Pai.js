import React from 'react'
import Filho from "./Filho"

export default props => {
    let x = 10
    let y = 300

    return (
         <>
         <Filho a={x} b={y}/>
         <Filho a={x+100} b={y+300}/>
         </>
        )
}