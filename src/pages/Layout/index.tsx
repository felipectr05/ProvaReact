import { Outlet } from "react-router-dom"
import { ComponentHeader, ComponentSidebar } from "../../components"
import * as style from "./styles"

export function Layout() {
  return (
    <style.Layout>
      <style.Main>
        <ComponentHeader />
        <Outlet />
      </style.Main>
      <ComponentSidebar/>
    </style.Layout>
  )
}