
import { Route, Routes } from "react-router-dom"
import { Registration } from "../Page/Register"
import { Login } from "../Page/Login"
import { Home } from "../Page/Home"



export const Allrouter=()=>{
    return <Routes>
        <Route path="/" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
    </Routes>
}