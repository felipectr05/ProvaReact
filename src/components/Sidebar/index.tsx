import * as style from "./style";

export function Sidebar(){

    return(
        <style.Sidebar>
            <h3>Restaurante</h3>
            <style.ButtonGreen>
                <button><a href="/">Tópicos</a></button>
            </style.ButtonGreen>
            <style.ButtonBlue>
                <button><a href="/desc">Descrição</a></button>
            </style.ButtonBlue>
        
        </style.Sidebar>
    )
}