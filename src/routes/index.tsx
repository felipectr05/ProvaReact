import {Routes, Route} from "react-router-dom"
import {HomePage, PageLayout, DescPage} from "../pages"

export function RouteSoftware(){
    return(
        <Routes>
            <Route path="/" element={<PageLayout/>}>
                <Route path="" element={<HomePage/>}/>
                <Route path="desc" element={<DescPage/>}/>
            </Route>
        </Routes>
    )
}