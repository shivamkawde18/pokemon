import React from "react";
import { inputBox } from "../view/Form";
const Input=(props:inputBox)=>{
    console.log(props);
    
    return(
    
        <>
        <input placeholder={props.value} style={props.style}></input>
        </>
    )
}
export default Input;