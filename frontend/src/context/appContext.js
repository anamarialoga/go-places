import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
toast.configure();

export const AppContext = createContext();

export const AppProvider = ({children})=>{

    const [user, setUser] = useState({});
    const [myListings, setMyListings] = useState([]);
    const [changeDetails, setChangeDetails] = useState(false);

    const [loadingUser, setLoadingUser] = useState(true);
    useEffect(()=>{
        const getUser = async ()=>{
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
            };
            
             try{
                    const {data} = await axios.get(
                    "http://localhost:1179/api/users/me",
                    config
                    );
                    setUser(data);
                    setLoadingUser(false);
             } 
              catch (error) {
                    toast.error(error.response?.data?.message);
              }
        }
        getUser();
    },[])

    const onLogin = async (formdata) => {
        const { email, password} = formdata;
        const config = {
            headers: {
            "Content-Type": "application/json",
            },
        };
        
         try{
                const {data} = await axios.post(
                "http://localhost:1179/api/users/login",
                {
                    email,
                    password,
                },
                config
                );
                    localStorage.setItem('token', data.token);
                    toast.success("Authenticated successfuly!");
                    window.location.href='/explore';
         } 
          catch (error) {
                toast.error(error.response?.data?.message);
          }

    }

    const onSignUp = async (formdata) =>{

        const {password, confirmPassword, name, email } = formdata;

        if(password !== confirmPassword)
        {
            toast.error('Passwords do not match!')
        }else{
            const config = {
                headers: {
                  "Content-Type": "application/json",
                },
            };
        
            try {
                const {data} = await axios.post(
                "http://localhost:1179/api/users",
                {
                    name,
                    email,
                    password,
                },
                config
                );
                
                console.log(data);
                toast.success("Registered successfuly!");
                window.location.href='/signin';
          } 
          catch (error) {
                toast.error(error.response?.data?.message);
          }
        }
    }

    const onLogOut=()=>{
        localStorage.removeItem("token");
        window.location.href = '/signin';
        toast.success('Logout successful!');
      }

    const onSubmitChangeDetails= async(formdata)=>{
        const {name, password, phone} = formdata;
        setChangeDetails(!changeDetails);
        if(changeDetails === true){ 
            if((name !== user.name) || (password !== "") || phone !==user.phone){
                const config={
                    headers:{
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
                try{
                        await axios.put(`http://localhost:1179/api/users/${user.id}`, 
                        {
                            name, 
                            password, 
                            phone
                        },
                        config
                        );
                    onLogOut();
                }catch(error){
                    toast.error(error.response.data.message)
                }
            }else{
            toast.info('No changes were made.');
            }
        }
    }

    const [loadingList, setLoadingList] = useState(true);
    const fetchMyListings= async()=>{
        const config = {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        try{     
            const {data} = await axios.get("http://localhost:1179/api/listings/me/", config);
            setMyListings(data);
            setLoadingList(false);
        }catch(error){
            toast.error(error.response?.data?.message)
        }
    }
    
    const onDeleteListing = async (listingid, listingname) => {
        if (window.confirm(`Are you sure you want to delete ${listingname}?`)) {
            const config = {
                headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            };
            try{
                await axios.delete(`http://localhost:1179/api/listings/${listingid}`, 
                config);
                window.location.href="/mylistings";
            }catch(error){
                toast.error(error.response.data.message);
            }
        }
    }

    
    const onEditListing = (listingid) => window.location.href = `/editlisting/${listingid}`

return (
    <AppContext.Provider value={{
    onLogin, 
    onLogOut,
    user,
    fetchMyListings,
    myListings,
    onDeleteListing,
    onSubmitChangeDetails,
    changeDetails,
    onEditListing,
    loadingList, 
    onSignUp,
    loadingUser
    }}>
        {children}
    </AppContext.Provider>
)

}