import * as style from "./style"

export function Card(props: {text: String}){
    return(
        <style.Card>
         <p>{props.text}</p>
        </style.Card>
    )
}