
import { Route, Routes } from "react-router-dom"
import { Registration } from "../Page/Register"
import { Login } from "../Page/Login"
import { Home } from "../Page/Home"
import { Winner } from "../Page/winner"
import { Privateroute } from "./privateroute"



export const Allrouter=()=>{
    return <Routes>
        <Route path="/" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Privateroute><Home/></Privateroute>}/>
        <Route path="/winner" element={<Privateroute><Winner/></Privateroute>}/>
    </Routes>
}