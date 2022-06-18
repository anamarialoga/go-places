import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SidebarListing from "../components/Listing/SidebarListing";
import { Loading } from "../components/Loading";
import { ListingContext } from "../context/listingContext";
import withRoot from "../withRoot";

import Places from "../components/Listing/Places";
const ListingAttractions= () => {

    const [rating, setRating] = useState('');
    const [filteredPlaces, setFilteredPlaces] = useState([]);

    const {listing, fetchListing, loading, getPlacesData, places, setPlaces} = React.useContext(ListingContext);
    const {listingid} = useParams();
    
    React.useEffect(()=>{
        fetchListing(listingid);
        setPlaces([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    React.useEffect(()=>{
        if(places.length === 0 ){
            getPlacesData('attractions', listing.latitude, listing.longitude)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[places])
    console.log(places)


    useEffect(() => {
        const filtered = places.filter((place) => Number(place.rating) >= rating);
        setFilteredPlaces(filtered);
      }, [places, rating]);

    console.log(places)

    return (loading || places.length===0)? <Loading/> : (
        <>
        <SidebarListing listingid={listingid} listing={listing}/>
        <Places  type={'attractions'} places={filteredPlaces.length ? filteredPlaces : places} rating={rating} setRating={setRating} />
        </>
    )}
    
    export default withRoot(ListingAttractions);