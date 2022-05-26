import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ReactPaginate from 'react-paginate';
import { ListItem } from "../components/ListItem";
import { Loading } from "../components/Loading";

export const Listings = () => {
    const [listings, setListings] = useState([])
    const [loading, setLoading]=useState(true);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

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

      useEffect(()=>{
          fetchAllListings();
      },[])

    //PAGINATION
    const [pageNumber, setPageNumber] = useState(0);
    const [listingsPerPage, setListingsPerPage] = useState(4);
    const pageCount = Math.ceil(listings.length / listingsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }

    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    useEffect(()=>{
        if(windowDimensions.width>=915 && windowDimensions.height<1300)
                setListingsPerPage(2);
        else if(windowDimensions.height>600 && windowDimensions.height<1300)
                setListingsPerPage(3);
        else if (windowDimensions.height >= 1300)
                setListingsPerPage(4);
        else setListingsPerPage(2);
    }, [windowDimensions])


    return loading ? <Loading/> : (
        <>
        <div style={{marginLeft:'2rem'}}>
          <br/>
        {/* <h2 style={{color: 'whitesmoke', fontWeight:'600'}}>Explore properties in /city/</h2> */}
        <ul className="block" style={{justifyContent: 'center', justifyItems: 'center', alignContent: 'center', alignItems:'center'}}>
            {Array.from(listings)?.slice(pageNumber * listingsPerPage, pageNumber * listingsPerPage + listingsPerPage).map((listing)=>(
                <ListItem listing={listing} key={listing.name} />
            ))}
        </ul>
         <ReactPaginate
            previousLabel={'<'}
            nextLabel={listings.length > 0 ? ">" : ""}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
        />
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </>

    )
}