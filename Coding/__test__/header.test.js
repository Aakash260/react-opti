import { getAllByTestId, render } from "@testing-library/react"
import Header from "../Components/Header"
import { Provider } from "react-redux"
import store from "../Utils/store"
import {StaticRouter} from "react-router-dom/server"
test("Logo Should Load on rendering header",()=>{
    const header=render(
       <StaticRouter>
    <Provider store={store}><Header/></Provider>
    </StaticRouter>
    )
    // const logo =getAllByTestId("logo")
    // console.log("🚀 ~ file: header.test.js:13 ~ test ~ logo:", logo)
 
    
})