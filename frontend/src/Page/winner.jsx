import { Box, Heading } from "@chakra-ui/react"
import Navbar from "../Components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"


export const Winner=()=>{
    const [winner,setwinner]=useState([])
    const [looser,setlooser]=useState([])

    useEffect(()=>{
        getdata()
    },[])
    function getdata(){
        axios.get("https://dogline.onrender.com/dog/addwinnerdata")
        .then((res)=>setwinner(res.data))
        .catch((err)=>console.log(err))

        axios.get("https://dogline.onrender.com/dogloos/addlosserdata")
        .then((res)=>setlooser(res.data))
        .catch((err)=>console.log(err))
    }
    return <Box>
        <Navbar/>
        <Heading as={'h2'} style={{color:'white',background:'#1D4044',paddingTop:'100px'}}>Check the winners</Heading>

        <Box bg={'#1D4044'} p={'20px'}>
            <div style={{border:'2px solid white',textAlign:'center',width:'90%',margin:'auto',color:'white',display:'flex',flexDirection:'row',padding:'10px 10px'}}>
                <div style={{width:'30%'}}>
                    <h2><b>WINNER</b></h2>
                </div>
                <div style={{width:'30%'}}>
                <h2><b>Time</b></h2>
                </div>
                <div style={{width:'30%'}}>
                <h2><b>LOOSER</b></h2>
                </div>
                
            </div>
            <div style={{border:'2px solid white',textAlign:'center',width:'90%',margin:'auto',color:'white',display:'flex',flexDirection:'row',padding:'5px 10px'}}>
                <div style={{width:'60%'}}>
                    {winner.map((item)=><div style={{display:'flex',flexDirection:'row'}}>
                        <img src={item.image} style={{margin:'10px 0px',width:'50%',height:'270px'}} alt="" />
                        
                        <p style={{width:'50%',margin:'auto'}}>Time : {item.time}</p>
                        </div>
                        
                    )}
                </div>
                
                <div style={{width:'40%'}}>
                {looser.map((item)=><div style={{display:'flex',flexDirection:'row'}}>
                        <img src={item.image} style={{margin:'10px 0px',alignItems:'flex-end',width:'75%',height:'270px'}} alt="" />
                        
                        </div>
                        
                    )}
                </div>
                
            </div>
        </Box>
    </Box>
}