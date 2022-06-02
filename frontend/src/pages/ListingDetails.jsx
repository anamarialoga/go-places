import { useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import SidebarListing from "../components/Listing/SidebarListing";
import withRoot from "../withRoot";
import { Container } from "@mui/system";
import { ListingContext } from "../context/listingContext";
import { Loading } from "../components/Loading";
import FeaturedPost from '../components/Listing/Description';
import Main from '../components/Listing/Main';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import GoogleMapReact from 'google-map-react';
import mapStyles from '../components/Listing/mapStyles';
import Rating from '@mui/material/Rating';
import Facilities from "../components/Listing/Facilities";

const SingleListing = () => {

const {listing, fetchListing, loading, coords} = useContext(ListingContext);
const {listingid} = useParams();

useEffect(()=>{
    fetchListing(listingid);
},[])


// console.log(listing)
// console.log(coords)



return loading? <Loading/> : (
    <>
    <SidebarListing listingid={listingid} listing={listing}/>
    <div style={{width: '100%', marginLeft: "20px"}}>
    <Container style={{width:"100%"}} >
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        width:"100%",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
                <div style={{height: '40vh' ,width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyChJb7b-LRNlR5mMgFdIQdD_yG0-WxYnjA' }}
                    defaultCenter={coords ?? {lat: 14.00000, lng: 15.0000}}
                    center={coords  ?? {lat: 14.00000, lng: 15.0000}}
                    defaultZoom={15}
                    margin={[50, 50, 50, 50]}
                    options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
                >
                     <div
                        style={{ position:'absolute', transform: 'translate(-50%, -50%)', zIndex: 9, '&:hover': { zIndex: 2 }}}
                        lat={Number(coords.lat ?? 14.00000)}
                        lng={Number(coords.lng ?? 15.00000)}
                    >  
                           <Paper elevation={3} style={{padding: '10px', backgroundColor: '#ffffffc2', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '110px'}}>
                            <Typography  variant="subtitle2" gutterBottom> {listing?.name}</Typography>
                            <img
                                alt= "image1"
                                style={{cursor:"pointer"}}
                                src={`http://127.0.0.1:8888/${listing?.images[0]}`}
                            />
                            <Rating name="read-only" size="small" value={5} readOnly />
                            </Paper>
                    </div> 
                </GoogleMapReact>
             </div>
    </Paper>
          <Grid container spacing={4}>
              <FeaturedPost listing={listing} />
              <Facilities listing={listing} />
          </Grid>
          {/* <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" listing={listing} />
          </Grid> */}
    </Container>
    </div>
    </>
)}

export default withRoot(SingleListing);