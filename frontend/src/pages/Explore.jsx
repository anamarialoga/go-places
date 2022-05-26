import { ImageSlider } from "../components/ImageSlider"
import { SearchBox } from "../components/SearchBox"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Loading } from "../components/Loading";
import { toast } from "react-toastify";
import  {Sidebar}  from "../components/Sidebar";

export const Explore = () => {

    const [listings, setListings] = useState([])
    const [loading, setLoading]=useState(true);


    useEffect(()=>{
      fetchAllListings();
    }, []);


    const fetchAllListings = async()=>{
      try{
        const  {data}  = await axios.get("http://localhost:1179/api/listings");
        setListings(data);
        setLoading(false);
      }
      catch (e) {
        toast.error(e.response.data.message);
      }
    };


    return loading? <Loading/> : (
        <div  className="pageContainer">
            <br/>
            <div className="formSearch"> 
              <div className="searchBoxDiv">
                <SearchBox/>
              </div>
            </div>
            <Sidebar/>
           <ImageSlider listings={listings}/>
        </div>
    )
}