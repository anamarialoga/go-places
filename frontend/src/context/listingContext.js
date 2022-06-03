import { createContext,  useState} from "react";
import { toast } from "react-toastify";
import axios from 'axios';
toast.configure();
export const ListingContext = createContext({});

export const ListingProvider = ({children})=> {

    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(false);
    const [coords, setCoords] = useState({});

    const [places, setPlaces] = useState([]);
    const [weather, setWeather] = useState({});
    const [forecast, setForecast] = useState ([])

 

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

   
        const [loadingPlaces, setLoadingPlaces] = useState(false)
        const getPlacesData = async (type, lat, long) => {
            try {
              setLoading(true);
              const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`, {
                params: {
                    latitude: `${lat}`,
                    longitude: `${long}`,
                },
                headers: {
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                    'X-RapidAPI-Key': 'bb448a6f19mshcfb71a404c39b74p119c47jsn3ca02941b0df'                
                },
              });
              setLoadingPlaces(false);
              setPlaces(data);
            } catch (error) {
              console.log(error);
            }
        }


        const getWeatherData = async (lat, lng) => {
            try {
              if (lat && lng) {
                setLoading(true);
                const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/weather', {
                  params: { lat, lon: lng},
                  headers: {
                    'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
                    'X-RapidAPI-Key': 'bb448a6f19mshcfb71a404c39b74p119c47jsn3ca02941b0df'
                  },
                });
                setLoading(false);
                setWeather(data.list? data.list[0].main : data.main);
              }
            } catch (error) {
              console.log(error);
            }   
          };


        
        const getWeatherForecast = async (lat, lng) => {
        try {
            if (lat && lng) {
            setLoading(true);
            const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/forecast/daily', {
                params: { lat, lon: lng},
                headers: {
                    'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
                    'X-RapidAPI-Key': 'c4af2c3815msh3a370aaf06de0b4p1afc74jsn36966ccaf885'
                },
            });
            setLoading(false);
            setForecast(data.list);
            }
        } catch (error) {
            console.log(error);
        }   
        };


    return (
        <ListingContext.Provider value={{
         loading,
         fetchListing,
         listing,
         coords,
         getWeatherData,
         weather,
         getWeatherForecast,
         forecast,
         getPlacesData,
         places,
         loadingPlaces
        }}>
            {children}
        </ListingContext.Provider>
    )
}