import { Box, Heading, Image, useToast } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export function Home() {
    const [dataone,setdataone]=useState("")
    const [datatwo,setdatatwo]=useState("")
    const [load,setload]=useState(false)
  
    const toast=useToast()
    useEffect(()=>{
        getdata()
    },[load])

    function getdata(){
        axios("https://dog.ceo/api/breed/hound/images/random/2")
        .then((res)=>{
            setdataone(res.data.message[0])
            setdatatwo(res.data.message[1])

        })
        .catch((err)=>console.log(err))
    }
    // console.log(dataone,datatwo)

    function handledataone(){
        const date=new Date()
        console.log(date)
        let winner={
            image:dataone,
            time:date
        }
        axios.post("https://dogline.onrender.com/dog/addwinnerdata",winner)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))


        let looser={
            image:datatwo,
            time:date
        }
        axios.post("https://dogline.onrender.com/dogloos/addlosserdata",looser)
        .then((res)=>{
            console.log(res)
            toast({
                position: 'bottom',
                title: "Thanks for Submitting your response",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            setload(!load)
        })
        .catch((err)=>console.log(err))

    }



    function handledatatwo(){
        const date=new Date()
        console.log(date)
        let winner={
            image:datatwo,
            time:date
        }
        axios.post("https://dogline.onrender.com/dog/addwinnerdata",winner)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))


        let looser={
            image:dataone,
            time:date
        }
        axios.post("https://dogline.onrender.com/dogloos/addlosserdata",looser)
        .then((res)=>{
            console.log(res)
            toast({
                position: 'bottom',
                title: "Thanks for Submitting your response",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            setload(!load)
        })
        .catch((err)=>console.log(err))
    }


    return <Box>
        <Navbar />
        <Heading as={'h2'} style={{color:'white',background:'#1D4044',paddingTop:'100px',paddingBottom:'120px'}}>Click on your favourite dog</Heading>
        <Box bg={'#1D4044'} h={"80vh"} style={{ display: 'flex', justifyContent: 'space-evenly'}}>
            
            <Box>
                <Box >
                    <Image src={dataone} onClick={handledataone} style={{width:'320px',height:'270px'}} _hover={{cursor:'pointer'}}  alt='Dan Abramov'/>
                </Box>
            </Box>
            <Box>
                <Box >
                    <Image src={datatwo}  onClick={handledatatwo} style={{width:'320px',height:'270px'}} _hover={{cursor:'pointer'}}  alt='Dan Abramov'/>
                </Box>
            </Box>
            
        </Box>
    </Box>
}