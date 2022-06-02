import { createContext,  useState} from "react";
import { toast } from "react-toastify";
import axios from 'axios';
toast.configure();
export const ListingContext = createContext({});

export const ListingProvider = ({children})=> {

    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(false);
    // const [shareLink, setShareLink] = useState(false);

    const [coords, setCoords]=useState({})
    // const [places, setPlaces] = useState([]);
    // const [weather, setWeather] = useState({});

    // const [type, setType] = useState('restaurants');
    // const [rating, setRating] = useState('');
    // const [childClicked, setChildClicked] = useState(null);
    // const [filteredPlaces, setFilteredPlaces] = useState([]);

    const fetchListing = async (listingid) => {
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


    return (
        <ListingContext.Provider value={{
         loading,
         fetchListing,
         listing,
         coords
        }}>
            {children}
        </ListingContext.Provider>
    )
}