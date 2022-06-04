import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import SidebarListing from "../components/Listing/SidebarListing";
import { ListingContext } from "../context/listingContext";
import withRoot from "../withRoot"

const CheckOutForm=()=>{
    const {listingid} = useParams();
    const {fetchListing, listing }= useContext(ListingContext);

    useEffect(()=>{
        fetchListing(listingid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return <>
    <div style={{   
        height: "76vh",        
        background: "url(http://127.0.0.1:8888/eberhard-grossgasteiger-S-2Ukb_VqpA-unsplash2.jpg)  no-repeat",
        backgroundSize: "cover"}}>
    <SidebarListing listingid={listingid} listing={listing}/>
    </div>
    </>
}

export default withRoot(CheckOutForm);