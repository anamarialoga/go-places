import { useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import SidebarListing from "../components/Listing/SidebarListing";
import { ListingContext } from "../context/listingContext";
import { AppContext } from "../context/appContext";
import withRoot from "../withRoot"
import Messages from '../components/Messages/Messages'

const ListingContactLandlord = () =>{

    const {listingid} = useParams();
    const {fetchListing, listing }= useContext(ListingContext);
    const {getUserById, landlord} = useContext(AppContext)

    useEffect(()=>{
        fetchListing(listingid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        getUserById(listing?.userId);
    },[listing])

    console.log(landlord);

    return (
    <>
    <SidebarListing listingid={listingid} listing={listing}/>
    <Messages landlord={landlord} listingId={listingid} listing={listing} />
    </>)
}

export default withRoot(ListingContactLandlord);