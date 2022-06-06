import { useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import SidebarListing from "../components/Listing/SidebarListing";
import { ListingContext } from "../context/listingContext";
import withRoot from "../withRoot"
import Messages from '../components/Messages/Messages'
const ListingContactLandlord = () =>{

    const {listingid} = useParams();
    const {fetchListing, listing }= useContext(ListingContext);

    useEffect(()=>{
        fetchListing(listingid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (
    <>
    <SidebarListing listingid={listingid} listing={listing}/>
    <Messages  landlordId={listing.userId}/>
    </>)
}

export default withRoot(ListingContactLandlord);