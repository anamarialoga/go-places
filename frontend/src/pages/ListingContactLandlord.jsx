import { useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import SidebarListing from "../components/Listing/SidebarListing";
import { ListingContext } from "../context/listingContext";

import withRoot from "../withRoot"
import Messages from '../components/Messages/Messages'
import axios from "axios";


const ListingContactLandlord = () =>{

    const {listingid} = useParams();
    const {fetchListing, listing}= useContext(ListingContext);
    // const {getUserById, landlord} = useContext(AppContext)

    useEffect(()=>{
        fetchListing(listingid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const [landlord, setLandlord] = useState({})
    const getUserById = async(userId) =>{
        const config = {
            method: 'get',
            url: `http://localhost:1179/api/users/${userId}`,
            headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        };

        axios(config)
        .then(function (response) {
         //console.log(response.data);
          setLandlord(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });

    }

    useEffect(()=>{
        getUserById(listing?.userId);
    },[listing])


    return (
    <>
    <SidebarListing listingid={listingid} listing={listing}/>
    <Messages landlord={landlord} listingId={listingid} listing={listing} />
    </>)
}

export default withRoot(ListingContactLandlord);