import { Button, Card, CardActions, CardContent, CardHeader, Divider, List, ListItem, ListItemText, Rating } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import * as React from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import SidebarListing from '../components/Listing/SidebarListing';
import { Loading } from '../components/Loading';
import TextField from '../components/TextField';
import Typography from '../components/Typography';
import { ListingContext } from '../context/listingContext';
import withRoot from "../withRoot";


function ListingAddReview (){

    const {listingid} = useParams();
    const {listing, fetchListing, loading} = React.useContext(ListingContext);
    const [average, setAverage] = React.useState({
        review: "",
        rating: null,
    })

   
    const {review, rating} = average;

    React.useEffect(()=>{
        fetchListing(listingid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const  onChange = (e, newValue)=>{
        if(e.target.id === "review")
        {
            setAverage((prevState) => ({...prevState, [e.target.id]: e.target.value}))
        }else
        {
            setAverage((prevState)=>({...prevState, rating: newValue}))
        } 
    }

    console.log(rating, review)

    const handleSubmit = (e) =>{
        e.preventDefault();
        const config = {
            method: 'put',
            url: `http://localhost:1179/api/listings/${listingid}`,
            headers: { 
              'Authorization': `Bearer ${localStorage.getItem('token')}`, 
              'Content-Type': 'application/json'
            },
            data : average
          };
          
          axios(config)
          .then(function (response) {
            toast.success("Review added successfully");
            setAverage({
                review: "",
                rating: null,
            })
            console.log(response.data)
            fetchListing(listingid);
          })
          .catch(function (error) {
            toast.error(error.response?.data?.message)
          });
    }


    return loading? <Loading/> : (
        <div style={{   
            height: "85vh",        
            background: "url(http://127.0.0.1:8888/eberhard-grossgasteiger-S-2Ukb_VqpA-unsplash2.jpg)  no-repeat",
            backgroundSize: "cover",
        }}>
            <SidebarListing listingid={listingid} listing={listing}/>
            <div style={{marginLeft:"20%", paddingTop:"2%", width:"100%", display:'flex', marginRight:"15%"}}>
            <div style={{width:"30%", marginRight:"5%"}}>
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
                            Give a rating & review based on your experience at {listing?.name}
                        </Typography>
                        <Rating 
                        onChange={onChange} 
                        name="rating" id="rating" value={rating} precision={0.5} color={"secondary"} size={"large"}  />
                        <TextField
                        onChange={onChange} 
                            name="review"
                            id="review"
                            value={review}
                            placeholder={"Write a review here ..."}
                            fullWidth
                            multiline={true}
                            rows={4}
                            style={{marginBottom: "1rem"}}
                            maxLength={300}
                        />
                        </div>
                        <Button onClick={handleSubmit} color={"secondary"} variant={"contained"}>
                            Submit Review
                        </Button>
                    </CardActions>
                </Card>
            </div>
            <div style={{width:"50%"}}>
                <Card style={{width:"80%", height:"77vh"}}>
                    <CardHeader title="Reviews & Ratings" />
                    <Divider />
                    <List style={{maxHeight: "100%",overflow:"auto"}}>
                    {listing?.average.map((item,i)=>(
                        <ListItem key={i} divider= {i<listing?.average.length - 1}>
                            <div style={{display:"flex", width:"100%"}}>
                                <div className='block' style={{ marginLeft:"1rem", width:"5cm"}}>
                                <Typography variant='subtitle1' style={{fontWeight:800}}>
                                    {item.user ?? ""}
                                </Typography>
                            </div>
                            <div style={{ width:"100%", marginLeft:"3rem", marginRight:"1rem", marginBottom:"3rem"}}>
                                <div style={{display:"inline-flex"}}>
                                <Typography variant='subtitle1' style={{fontWeight:800}}>
                                    {Number(item.rating).toFixed(1)} /5
                                </Typography>
                                <Typography variant='subtitle2' style={{marginLeft:"1rem",fontWeight:"300", paddingTop:"0.3rem"}}>
                                    {item.timestamp.slice(0,10)} {item.timestamp.slice(-13,-5)}
                                </Typography>
                                </div>
                                <ListItemText >
                                   <Typography style={{fontWeight:"400", fontStyle:"italic"}}>
                                    "{item.review}"
                                    </Typography>
                                </ListItemText>
                            </div>
                            </div>
                        </ListItem>
                    ))}
                    </List>
                </Card>
            </div>
        </div>
        </div>
    )
}


export default withRoot(ListingAddReview)