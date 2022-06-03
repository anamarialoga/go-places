import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SidebarListing from "../components/Listing/SidebarListing";
import { Loading } from "../components/Loading";
import { ListingContext } from "../context/listingContext";
import withRoot from "../withRoot";

import Places from "../components/Listing/Places";
const ListingDining = () => {

    const [rating, setRating] = useState('');
    const [filteredPlaces, setFilteredPlaces] = useState([]);

    const {listing, fetchListing, loading, getPlacesData, places, coords} = React.useContext(ListingContext);
    const {listingid} = useParams();
    
    React.useEffect(()=>{
        fetchListing(listingid);
        getPlacesData('restaurants', coords.lat, coords.lng)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
        const filtered = places.filter((place) => Number(place.rating) >= rating);
        setFilteredPlaces(filtered);
      }, [places, rating]);

    console.log(places)

    return loading? <Loading/> : (
        <>
        <SidebarListing listingid={listingid} listing={listing}/>
        <Places type={'restaurants'} places={filteredPlaces.length ? filteredPlaces : places} rating={rating} setRating={setRating} />
        </>
    )}
    
    export default withRoot(ListingDining);