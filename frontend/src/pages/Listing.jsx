import { useContext, useEffect, useState } from "react"
import { Link,  useNavigate,  useParams } from "react-router-dom";
import shareIcon from '../common/svg/shareIcon.svg'
import { Loading } from "../components/Loading";
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css/bundle'
import {Navigation, EffectFade, Pagination, Autoplay } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import axios from 'axios'
import { AppContext } from "../context/appContext";
import GoogleMapReact from 'google-map-react';
import { Button, Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import ReactStars from "react-rating-stars-component";
import mapStyles from '../mapStyles';
import useStyles from '../styles.js';
import List from "../components/List";
import useStylesButtons from '../components/navbarStyles';

export const Listing = () => {
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(true);
    const [shareLink, setShareLink] = useState(false);
    const {listingid} = useParams();
    const {user} = useContext(AppContext)

    const [coords, setCoords]=useState({})
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:1499px)');
    const matchesMin = useMediaQuery('(max-width: 600px)')
    const [places, setPlaces] = useState([]);
    const [weather, setWeather] = useState({});

    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');
    const [childClicked, setChildClicked] = useState(null);
    const [filteredPlaces, setFilteredPlaces] = useState([]);

    const navigate = useNavigate();

    const classes2 = useStylesButtons();
    useEffect(()=>{
        console.log(window.innerWidth, window.innerHeight)
    },[])

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
                setLoading(false);
                setListing(data);
                setCoords({lat: data.latitude, lng: data.longitude})
                
            }catch(error){
                console.log(error.response?.data?.message)
            }
        }
        fetchListing();

        const getPlacesData = async (type, lat, long) => {
            try {
              setLoading(true);
              const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`, {
                params: {
                    latitude: `${lat}`,
                    longitude: `${long}`,
                },
                headers: {
                  'x-rapidapi-key': 'c4af2c3815msh3a370aaf06de0b4p1afc74jsn36966ccaf885',
                  'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                },
              });
              setLoading(false);
              setPlaces(data);
            } catch (error) {
              console.log(error);
            }
        }
        getPlacesData( type, coords.lat, coords.lng);


        const getWeatherData = async (lat, lng) => {
            try {
              if (lat && lng) {
                setLoading(true);
                const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/weather', {
                  params: { lat, lon: lng},
                  headers: {
                    'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
                    'X-RapidAPI-Key': 'c4af2c3815msh3a370aaf06de0b4p1afc74jsn36966ccaf885'
                  },
                });
                setLoading(false);
                setWeather(data.list? data.list[0].main : data.main);
              }
            } catch (error) {
              console.log(error);
            }   
          };

        getWeatherData(coords.lat, coords.lng);
    }, [coords.lat, coords.lng, listingid, type])


    const shortLoc = listing?.location.split(',');

    useEffect(() => {
        const filtered = places.filter((place) => Number(place.rating) >= rating);
        setFilteredPlaces(filtered);
      }, [places, rating]);


    console.log(filteredPlaces)
    
    return loading? <Loading/> : ( 
    <main style={{backgroundColor: 'black'}} >
        <div className="listingPage flex" >
            <Swiper  modules={[Navigation, EffectFade, Pagination, Autoplay]} navigation pagination={{clickable: true}} effect={'fade'} speed={800} slidesPerView={1} loop={true} autoplay={{ delay: 1000, disableOnInteraction: false}} className='swiper-container2'>
            {listing.images.map((url, index) => (
            <SwiperSlide key={index}>
                <div
                style={{
                    background: `url(http://127.0.0.1:8888/${listing.images[index]}) center no-repeat`,
                    backgroundSize: 'cover',
                }}
                className='swiperSlideDiv2'
                >
                        <div className='swiperSlideRating'>
                            <ReactStars
                                count={5}
                                size={35}
                                value={listing.rating ?? 1}
                                activeColor="#00cc66"
                                isHalf
                                edit={false}
                            />
                        </div>
                </div>
            </SwiperSlide>
            ))}
            </Swiper>
            <div className='leafletContainer'>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAj7Ry3Vg3NZ9woGl1PapWLjWqMSqISIDo' }}
                    defaultCenter={coords}
                    center={coords}
                    defaultZoom={15}
                    margin={[50, 50, 50, 50]}
                    options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
                >
                     <div
                        className={classes.markerContainer}
                        lat={Number(coords.lat)}
                        lng={Number(coords.lng)}
                    >  
                    {matchesMin
                        ? <LocationOnOutlinedIcon color="black" fontSize="large" />
                        : (
                           <Paper elevation={3} className={classes.paper}>
                            <Typography className={classes.typography} variant="subtitle2" gutterBottom> {listing.name}</Typography>
                            <img
                                alt= "image1"
                                className={classes.pointer}
                                src={`http://127.0.0.1:8888/${listing.images[0]}`}
                            />
                            <Rating name="read-only" size="small" value={5} readOnly />
                            </Paper>
                        )}
                    </div> 
                </GoogleMapReact>
             </div>
        </div>
        <div className="shareIconDiv" onClick={()=>{
            navigator.clipboard.writeText(window.location.href);
            setShareLink(true);
            setTimeout(()=>{
                setShareLink(false);
            }, 2000)
        }}>
                <img src={shareIcon} alt="shareIcon"/>
            </div>

            {shareLink && <p className="linkCopied">Link copied!</p>}

            <div className="listingDetails2">
                <div className={matches ? 'block':"flex"}>
                        <div className="listingCard block" >
                            <h2 className="cardName">
                                {listing.name}
                            </h2>
                            <p className="listingLocation2">
                                {listing.location}
                            </p>
                            <p className="listingType2">
                                {listing.type}
                            </p>
                            <p className="listingType2">
                                {listing.purpose}
                            </p>
                            {listing.pool && (<p className="listingType2">
                                pool
                            </p>)}
                            {listing.spa && (<p className="listingType2">
                                spa
                            </p>)}
                            {listing.offer && 
                            <p className="discountPrice2">
                                {listing.price-listing.discount}$ Discount
                            </p>}
                            <div className="flex">
                                <ul className="listingDetailsList2">
                                    <li>
                                        {listing.bedrooms > 1? `${listing.bedrooms} Bedrooms` : '1 Bedroom'}
                                    </li>
                                    <li>
                                        {listing.bathrooms > 1? `${listing.bedrooms} Bathrooms` : '1 Bathroom'}
                                    </li>
                                    <li>
                                        {listing.parking ?  'Parking Spot' : 'No Parking'}
                                    </li>
                                </ul>
                                <div className="block" style={{marginLeft: '1rem'}}>
                                    <p className="listingPrice2">
                                    {listing.offer? listing.discount: listing.price}$ /night
                                    </p>
                                    <p className="listingOldPrice">
                                        {listing.offer && `${listing.price}$ /night`}
                                    </p>
                                </div>
                            </div>
                           { listing.description.length> 55? 
                            <p className="listingDescription2">
                                {listing.description.slice(0,55)+' ...'} <Button varinat={"text"} st>[read more]</Button>
                            </p> :                             
                            <p className="listingDescription2">
                                {listing.description}
                            </p> 
                            }

                        </div>  
                        <div className="listingCard2 block" style={{textAlign:'center'}}>
                            {user.id !== listing.userId ? (
                                <>
                                    <Button variant={"text"} className={classes2.checkout}>Proceed to Checkout</Button>
                                    <Button variant= {"contained"} onClick={()=>navigate(`/contact/${listing.userId}?listingName=${listing.name}`)} className={classes2.contact}>
                                        Contact Landlord
                                    </Button>
                                    <h5 style={{color: 'whitesmoke'}}>You can read other people's reviews and also leave a rating here </h5>
                                    <Button className={classes2.reviews}>Reviews</Button>
                                </>
                            ) : (
                                <>
                                    <h1 style={{color: '#00cc66'}}>{listing.grade ?? 9.5}/10</h1>
                                    <h5 style={{color: 'whitesmoke'}}>This grade is personal and its purpose is to help increasing productivity.</h5>
                                    <Button className={classes2.reviews}>Reviews</Button>
                                </>
                            )}
                        </div>
                        <div className="listingCard3" >
                            <List 
                                places={filteredPlaces.length ? filteredPlaces : places} 
                                type={type} 
                                setType={setType} 
                                childClicked={childClicked} 
                                isLoading={loading} 
                                rating={rating} 
                                setRating={setRating} 
                            />
                        </div>
                        <div className="listingCard2" style={{textAlign: 'center'}}>
                            <h3 style={{color: '#00cc66', marginTop: '-1rem'}}>Weather now in {shortLoc[0]}</h3>
                            <h1 style={{color: 'whitesmoke', fontWeight: 400}}>{weather? (weather.temp-272.15).toFixed(2) : 0} °C</h1>
                            <p  style={{color: 'whitesmoke', fontWeight: 500}}> Feels like: {weather? (weather.feels_like-272.15).toFixed(2) : 0} °C</p>
                            <p  style={{color: 'whitesmoke', fontWeight: 500}}> Humidity: {weather? weather.humidity : 0} %rh</p>
                            <div className="flex" style={{justifyContent: 'space-around'}}>
                                <p style={{color: 'whitesmoke', fontWeight: 500}}>{(weather.temp_min-272.15).toFixed(2)} °C min</p>
                                <p style={{color: 'whitesmoke', fontWeight: 500}}>{(weather.temp_max-272.15).toFixed(2)} °C max</p>
                            </div>
                        </div>
                    </div>
                </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </main>

    )
}