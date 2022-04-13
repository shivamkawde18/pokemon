import React from "react"

import { buttonProp } from "../view/Form";
import "../view/Style.css"
const Button=(props:buttonProp)=>{
    
    return (
        <>
           <button className="btn" style={props.style}>{props.children}</button>
        </>
    )
}
export default Button;