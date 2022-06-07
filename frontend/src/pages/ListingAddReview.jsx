import { Avatar, Button, Card, CardActions, CardContent, Divider, Paper, Rating } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react'
import { useParams } from 'react-router-dom';
import SidebarListing from '../components/Listing/SidebarListing';
import { Loading } from '../components/Loading';
import TextField from '../components/TextField';
import Typography from '../components/Typography';
import { AppContext } from '../context/appContext';
import { ListingContext } from '../context/listingContext';
import withRoot from "../withRoot";


function ListingAddReview (){

    const {listingid} = useParams();
    const {listing, fetchListing, loading} = React.useContext(ListingContext);
    const {user} = React.useContext(AppContext)

    React.useEffect(()=>{
        fetchListing(listingid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    console.log(listingid, listing)

    return loading? <Loading/> : (
        <div style={{   
            height: "85vh",        
            background: "url(http://127.0.0.1:8888/eberhard-grossgasteiger-S-2Ukb_VqpA-unsplash2.jpg)  no-repeat",
            backgroundSize: "cover",
        }}>
            <SidebarListing listingid={listingid} listing={listing}/>
            <div style={{width:"30%", marginLeft:"40%", paddingTop:"2%"}}>
            <Card >
                    <CardContent>
                    <Box
                        sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign:"center"
                        }}
                    >
                        <Typography
                        color="textPrimary"
                        gutterBottom
                        variant="h4"
                        style={{fontSize:"1.4rem"}}
                        >
                        {listing?.name}
                        </Typography>
                        <Typography
                        color="primary"
                        style={{marginTop:"1rem"}}
                        >
                        {listing?.description.length < 150 ? listing?.description : (listing?.description.slice(0,150)+"...")}
                        </Typography>
                    </Box>
                    </CardContent>
                    <Divider />
                    <CardActions style={{backgroundColor: "#fff5f8", justifyContent:"center", textAlign:"center", display:"block"}} >
                        <div style={{display:"block"}}>
                        <Typography  variant='subtitle2' color={"textSecondary"} style={{fontWeight:"300"}}>
                            Give a rating & review based on your experience at {listing.name}
                        </Typography>
                        <Rating precision={0.5} color={"secondary"} size={"large"}  />
                        <TextField
                            placeholder={"Write a review here ..."}
                            fullWidth
                            multiline={true}
                            rows={4}
                            style={{marginBottom: "1rem"}}
                            maxLength={300}
                        />
                        </div>
                        <Button color={"secondary"} variant={"contained"}>
                            Submit Review
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}


export default withRoot(ListingAddReview)