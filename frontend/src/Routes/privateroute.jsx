import { Navigate } from "react-router-dom";


export const Privateroute=({children})=>{
    let token =localStorage.getItem("token")
   
    if(token ){
       return children
    }
    alert("First Login to Dogline account Please")
    return  <Navigate to = "/"/>
    
       
}