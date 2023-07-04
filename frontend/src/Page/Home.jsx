import { Box, Image } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";



export function Home() {
    const [data,setdata]=useState("")

    useEffect(()=>{
        getdata()
    },[])

    function getdata(){
        fetch()
    }
    return <Box>
        <Navbar />
        <Box bg={'#1D4044'} h={"100vh"} style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Box>
                <Box>
                    <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov'/>
                </Box>
            </Box>
            <Box>
                <Box>
                <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov'/>
                </Box>
            </Box>
        </Box>
    </Box>
}