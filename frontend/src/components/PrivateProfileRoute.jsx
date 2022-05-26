import { UserProfile } from "../pages/UserProfile"
import {Navigate} from 'react-router-dom';
import { toast } from "react-toastify";
import { useEffect} from "react";


export const PrivateProfileRoute = () => {
    
    useEffect(()=>{
        if(localStorage.getItem('token')===""){
            toast.info('Please authenticate first')
        }
    },[]); 

    return ((localStorage.getItem('token') !=="" ) ? <UserProfile /> : (<Navigate to='/signin'/>))
  }
  