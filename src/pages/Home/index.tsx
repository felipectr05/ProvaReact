import * as style from "../Home/styles"
import { ComponentCard } from "../../components"


export function Home() {
  return (
    <style.Main>
        <ComponentCard text="Receita com História"/>
        <ComponentCard text="Guia de Vinhos para Iniciantes"/>
        <ComponentCard text="Receita de Cozinha Internacional"/>
        <ComponentCard text="Dicas para Churrasco Perfeito"/>
    </style.Main>
  )
}