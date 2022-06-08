import { useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import SidebarListing from "../components/Listing/SidebarListing";
import { ListingContext } from "../context/listingContext";

import withRoot from "../withRoot"
import Messages from '../components/Messages/Messages'
import axios from "axios";
import { AppContext } from "../context/appContext";


const ListingContactLandlord = () =>{

    const {listingid} = useParams();
    const {fetchListing, listing}= useContext(ListingContext);

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

    const { getConvWithUser, convWithUser} = useContext(AppContext)

    useEffect(()=>{
        getUserById(listing?.userId);
    },[listing])

    
    useEffect(()=>{
        if(convWithUser.length===0)
        getConvWithUser(listingid, landlord._id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[convWithUser])

    console.log(convWithUser)

    const landlordName = landlord?.firstName + " " + landlord?.lastName

    return (
    <>
    <div 
    style={{ 
        paddingLeft:"17%",
        background: "url(http://127.0.0.1:8888/eberhard-grossgasteiger-S-2Ukb_VqpA-unsplash2.jpg)  no-repeat",
        backgroundSize: "cover"
    }}>
    <SidebarListing listingid={listingid} listing={listing}/>
    <Messages landlordName={landlordName} listingUID={landlord._id} allConv={convWithUser} listingId={listingid}/>
    </div>
    </>)
}

export default withRoot(ListingContactLandlord);