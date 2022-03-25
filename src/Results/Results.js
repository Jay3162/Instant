import React from "react";
import Result from '../resultTemp/resultTemp'


export default function Results(props) {
    const Image = props.Image.jewelery || props.Image.tech || props.Image.mens || props.Image.womens
    console.log(Image.length)
    let rows = []
    for (let i = 0; i < Image.length; i++) {
        rows.push(<Result key={i} />)
    }
    console.log(rows)
    
    return (
        <div>
            <div><Result Image={Image}/></div>
            
        </div>
    )
}