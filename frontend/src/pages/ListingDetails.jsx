import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SidebarListing from "../components/Listing/SidebarListing";
import { AppContext } from "../context/appContext";
import AppAppBar from "../views/AppAppBar";
import withRoot from "../withRoot";
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css/bundle'
import {Navigation, EffectFade, Pagination, Autoplay } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import {  Paper } from "@mui/material";
import { Box, Container } from "@mui/system";
import { ListingContext } from "../context/listingContext";
import { Loading } from "../components/Loading";


const SingleListing = () => {

const {listing, fetchListing, loading} = useContext(ListingContext);
const {listingid} = useParams();

useEffect(()=>{
    fetchListing(listingid);
},[])


console.log(listing)

return loading? <Loading/> : (
    <>
    <SidebarListing listingid={listingid} listing={listing}/>
    <div style={{
        backgroundImage: 'url(http://127.0.0.1:8888/eberhard-grossgasteiger-S-2Ukb_VqpA-unsplash.jpg)',
        backgroundRepeat: 'no-repeat',
    }}>
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Container>
        <Box sx={{ mt: 0, mb: 0, ml: -13, mr: 0}}>
          <Paper
            style={{ width:"1630px"}}
          >
            <div style={{  width: '100%'}}>
            <Swiper  modules={[Navigation, EffectFade, Pagination, Autoplay]} navigation pagination={{clickable: true}} effect={'fade'} speed={800} slidesPerView={1} loop={true} autoplay={{ delay: 1000, disableOnInteraction: false}} className='swiper-container'>
            {listing?.images.map((url, index) => (
            <SwiperSlide key={index}>
                <div
                style={{
                    background: `url(http://127.0.0.1:8888/${listing?.images[index]}) center no-repeat`,
                    backgroundSize: 'cover',
                }}
                className='swiperSlideDiv'
                >
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
        </div>
        </Paper>
        <div className="flex" style={{width: "100%", justifyContent: "space-around", alignContent:"center", marginTop: "2rem", marginLeft: "16%", marginRight: "2rem"}}>
            <Paper>
                Hello
            </Paper>
            <Paper>
                Hello
            </Paper>
            <Paper>
                Hello
            </Paper>
        </div>
        </Box>
      </Container>
    </Box>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
    </>
)}

export default withRoot(SingleListing);