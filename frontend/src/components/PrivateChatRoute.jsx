import { Messages } from "../pages/Messages"
import {Navigate} from 'react-router-dom';
import { toast } from "react-toastify";
import { useEffect } from "react";

export const PrivateChatRoute = () => {
    
    useEffect(()=>{
        if(localStorage.getItem('token')===""){
            toast.info('Please authenticate first')
        }
    },[]); 

    return (localStorage.getItem('token') !== "")? <Messages/> : (<Navigate to='/signin'/>)
  }
  