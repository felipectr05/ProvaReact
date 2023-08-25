import * as style from "./style"

export function Desc(props: {text: String}){
    return(
        <style.Card>
         <p>{props.text}</p>
        </style.Card>
    )
}