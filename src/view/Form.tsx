import React from "react"
import Button from "../component/Button";
import Input from "../component/Input";
import List from "../component/List";
import { searchBox } from "./Style";
import { button } from "./Style";
import "./Style.css"
export interface inputBox{
    style?:{},
    value:string
}
export interface buttonProp{
    item:{},
    style:{},
    children:string
}
const Form=()=>{

    const  inputProps :inputBox={
        style:searchBox,
        value:"Enter item Name",
        
    }
    const  buttonPropsValuesAccending :buttonProp={
        item:{},
        style:button,
        children:"accending"

    }
    const buttonPropsValuesdccending :buttonProp={
        item:{},
        style:button,
        children:"dccending"

    }
    return(
        <>
        <div className="headerDiv">
        <Input {...inputProps}></Input>
        <Button {...buttonPropsValuesAccending}></Button>
        <Button {...buttonPropsValuesdccending}></Button>
        </div>
       <List></List>
        
        </>
    )
}
export default Form;