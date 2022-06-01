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
import { Card, Paper } from "@mui/material";
import { Box, Container } from "@mui/system";


const SingleListing = () => {

    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(true);
    const [shareLink, setShareLink] = useState(false);
    const {listingid} = useParams();
    const {user} = useContext(AppContext)

    const [coords, setCoords]=useState({})
    const [places, setPlaces] = useState([]);
    const [weather, setWeather] = useState({});

    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');
    const [childClicked, setChildClicked] = useState(null);
    const [filteredPlaces, setFilteredPlaces] = useState([]);

    useEffect(()=>{
        const fetchListing = async () => {
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
            try{
                setLoading(true);
                const {data} = await axios.get(`http://localhost:1179/api/listings/${listingid}`, config);
                setListing(data);
                setLoading(false);
                setCoords({lat: data.latitude, lng: data.longitude})
                
            }catch(error){
                console.log(error.response?.data?.message)
            }
        }
        fetchListing();

        // const getPlacesData = async (type, lat, long) => {
        //     try {
        //       setLoading(true);
        //       const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`, {
        //         params: {
        //             latitude: `${lat}`,
        //             longitude: `${long}`,
        //         },
        //         headers: {
        //           'x-rapidapi-key': 'c4af2c3815msh3a370aaf06de0b4p1afc74jsn36966ccaf885',
        //           'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        //         },
        //       });
        //       setLoading(false);
        //       setPlaces(data);
        //     } catch (error) {
        //       console.log(error);
        //     }
        // }
        // getPlacesData( type, coords.lat, coords.lng);


        // const getWeatherData = async (lat, lng) => {
        //     try {
        //       if (lat && lng) {
        //         setLoading(true);
        //         const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/weather', {
        //           params: { lat, lon: lng},
        //           headers: {
        //             'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
        //             'X-RapidAPI-Key': 'c4af2c3815msh3a370aaf06de0b4p1afc74jsn36966ccaf885'
        //           },
        //         });
        //         setLoading(false);
        //         setWeather(data.list? data.list[0].main : data.main);
        //       }
        //     } catch (error) {
        //       console.log(error);
        //     }   
        //   };

        // getWeatherData(coords.lat, coords.lng);
    }, [])

console.log(listing)

return (
    <>
    <AppAppBar/>
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