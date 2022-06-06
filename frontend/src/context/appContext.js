import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';

toast.configure();


export const AppContext = createContext();

export const AppProvider = ({children})=>{

    const [user, setUser] = useState({});
    const [myListings, setMyListings] = useState([]);
    const [changeDetails, setChangeDetails] = useState(false);
    const [listings, setListings] =useState([]);
    const [loading, setLoading] = useState(false);

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

        const {password, confirmPassword, firstName, lastName, email } = formdata;

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
                    firstName, 
                    lastName,
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
        const {firstName, lastName, password, phone, address, city, country} = formdata;
        setChangeDetails(!changeDetails);
        if(changeDetails === true){ 
            if(((firstName !== user.firstName) && (lastName !== user.lastName)) || (password !== "") || (phone !==user.phone) ||( address !== user.address) || (city!== user.city) || (country !== user.country)) {
                const config={
                    headers:{
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
                try{
                        await axios.put(`http://localhost:1179/api/users/${user.id}`, 
                        {
                            firstName,
                            lastName,  
                            password, 
                            phone,
                            address,
                            city,
                            country
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


    const fetchAllListings = async()=>{
        try{
          setLoading(true);
          const  {data}  = await axios.get("http://localhost:1179/api/listings");
          setListings(data);
          setLoading(false);
        }
        catch (e) {
          toast.error(e.response.data.message);
        }
      };
    
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


    const [searchedLoc, setSearchedLoc] = useState("")
    const [dateRange, setDateRange] = useState({
      searchDateStart: null,
      searchDateEnd: null
    })

    const {
        searchDateStart, 
        searchDateEnd
      } = dateRange;
    
      const onChangeStart=(newValue)=>{
        setDateRange((prevState)=>({
          ...prevState,
          [`searchDateStart`]: newValue
        }))
      }
    
      const onChangeEnd=(newValue)=>{
        setDateRange((prevState)=>({
          ...prevState,
          [`searchDateEnd`]: newValue
        }))
      }

      function getDatesInRange(startDate, endDate) {

        if(startDate !== null && endDate !== null){
        const date = new Date(startDate.getTime());
      
        const dates = [];
      
        while (date <= endDate) {
          dates.push(new Date(date).toDateString());
          date.setDate(date.getDate() + 1);
        }
           return dates;
        }
        return [];
    }

    function contains(arr1, arr2) {
        return arr1.some(item => arr2.includes(item))
    }
     

    const [searchedListings, setSearchedListings] = useState([]);


    const fetchSearchedListings = async (searchedLoc, range)=>{
        let searched =[];
        const {searchDateStart, searchDateEnd} = range;
        const searchedPeriod = getDatesInRange(searchDateStart, searchDateEnd);
        try{
            setLoading(true);
            const  {data}  = await axios.get("http://localhost:1179/api/listings");
            if(searchedPeriod.length > 0) {
                data.map((listing) => {
                    if(listing.location.includes(searchedLoc)  && !contains(listing.ranges, searchedPeriod))
                    {
                        searched.push(listing);
                    }
                    return searched
                })
            }else{
                data.map((listing) => {
                    if(listing.location.includes(searchedLoc))
                    {
                        searched.push(listing);
                    }
                    return searched;
            })
          }
          setSearchedListings(searched);
          setLoading(false);
          }
        catch (e) {
            toast.error(e.response.data.message);
        }
    }


    const onSubmitBooking = async (listingid, billingData, paymentData, dateRange )=>{
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        };

        const hashedCardNumber = "xxxx-xxxx-xxxx-"+paymentData.cardNumber.slice(-4);
        delete paymentData.cardNumber
        delete paymentData.cvv
        paymentData.cardNumber=hashedCardNumber;

        try{
            await axios.post("http://localhost:1179/api/bookings", 
            {
                listingid,
                billingData,
                paymentData,
                dateRange
            },
            config )
            toast.success("Booking created with success!")
        }catch(error){
            toast.error(error.response.data.message)
        }
    }

    const onUpdateListingRanges = async(listingid, ranges)=>{
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        };
        try{
            await axios.put(`http://localhost:1179/api/listings/${listingid}`,
            {
                ranges
            },
            config)
            setDateRange({
                searchDateStart: null,
                searchDateEnd: null
            })
        }catch(error){
            toast.error(error.response.data.message)
        }
    }

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
    loadingUser,
    fetchAllListings,
    listings,
    loading, 
//----------------------------------------------
    dateRange,
    searchDateStart,
    searchDateEnd,
    onChangeStart,
    onChangeEnd,
    searchedLoc,
    setSearchedLoc,
    searchedListings,
    fetchSearchedListings,
    getDatesInRange,
    contains,
    onSubmitBooking,
    onUpdateListingRanges
    }}>
        {children}
    </AppContext.Provider>
)

}