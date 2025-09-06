import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ListAdvt(){
    const [userlist, setUserList]=useState([]);
    //fetch("https://jsonplaceholder.typicode.com/todos/1").then((res)=>console.log(res));
    useEffect(()=>{
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(res=>res.json())
        // .then((json)=>{
        //     console.log(json);
        //     setUserList(json);
        // });
       axios.get("https://jsonplaceholder.typicode.com/posts")
       .then((response)=>{
        setUserList(response.data)
       })

    },[])
    return(
        <>
            <Typography variant={"h1"}>Advertisement List</Typography>

           {userlist.map((i,index)=>(
            <h2 key={index}>DATA{i}</h2>
           ))}
        </>
    )
}