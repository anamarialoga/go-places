import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import SidebarListing from "../components/Listing/SidebarListing";
import { ListingContext } from "../context/listingContext";
import withRoot from "../withRoot"
import Checkout from '../components/Listing/Checkout'
import { AppContext } from "../context/appContext";

const CheckOutForm=()=>{
    const {listingid} = useParams();
    const {fetchListing, listing }= useContext(ListingContext);
    const {user, dateRange} = useContext(AppContext);

    useEffect(()=>{
        fetchListing(listingid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return <>
    <div style={{   
        height: "85vh",        
        background: "url(http://127.0.0.1:8888/eberhard-grossgasteiger-S-2Ukb_VqpA-unsplash2.jpg)  no-repeat",
        backgroundSize: "cover",
    }}>
    <SidebarListing listingid={listingid} listing={listing}/>
    <Checkout user={user} listing={listing} dateRange={dateRange} />
    </div>
    </>
}

export default withRoot(CheckOutForm);