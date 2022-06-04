import { Button, Card, CardActionArea, CardHeader, Chip, Divider, List, ListItem, ListItemAvatar} from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react"
import ReactPaginate from "react-paginate";
import { Loading } from "../components/Loading";
import Typography from "../components/Typography";
import { AppContext } from "../context/appContext"
import withRoot from "../withRoot"
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import ShowerIcon from '@mui/icons-material/Shower';
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from "react-router-dom";

const SearchedListings = ()=>{
    const {searchedListings, youSearchedFor, loading}  = useContext(AppContext);

      //PAGINATION
    const [pageNumber, setPageNumber] = useState(0);
    const listingsPerPage=3;
    const pageCount = Math.ceil(searchedListings.length / listingsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const navigate = useNavigate();

    return loading? <Loading/> :  <>
    <div style={{height:"20cm",background: "url(http://127.0.0.1:8888/eberhard-grossgasteiger-S-2Ukb_VqpA-unsplash.jpg)  no-repeat"}}>
    <div className="flex" style={{marginLeft:"3cm", marginRight:"3cm", paddingTop:"1cm", paddingBottom:"1cm"}}>
    { searchedListings.length>0 ? 
    <>
    <Card style={{width:"20%", height:"21cm"}}>
        <CardHeader title="Filter By" />
        <Divider/>
    </Card>
    <Card style={{width:"80%"}}>
    <CardHeader title={`You searched for: "${youSearchedFor}" (${searchedListings.length} results)`} subheader={`Find the best accomodation in ${youSearchedFor} with us and enjoy the experience` }  />
    <Divider/>
    <List style={{height:'17cm'}}>
        {searchedListings.slice(pageNumber * listingsPerPage , pageNumber * listingsPerPage + listingsPerPage).map((listing, i) =>
            <ListItem key={i} divider={i<searchedListings.length - 1}>

                <ListItemAvatar>
                <img
                    alt={listing.name}
                    src={`http://127.0.0.1:8888/${listing.images[0]}`}
                    style={{
                        borderRadius: '1rem',
                        height: 190,
                        width: 300
                    }}
                    />
                </ListItemAvatar>
                <div className="block" style={{width:"100%",marginLeft:"1rem", marginRight:"2rem"}}>
                <CardActionArea  onClick={()=>navigate(`/listings/${listing._id}`)}>
                    <div style={{width:"100%",display:'flex', justifyContent:"space-between"}}>
                        <Typography color={"secondary"} variant="h5" style={{fontSize:"1.3rem", fontWeight:"900", textDecoration:"underline"}}>
                            {listing.type === "hotel"? `Hotel ${listing.name}` : (listing.type==='apartment') ? `Apartment ${listing.name}` : `Villa ${listing.name}`} 
                        </Typography>
                        <div className="flex">
                            <Typography variant="subtitle1" style={{marginRight:"0.5rem", fontWeight:"800"}}>
                               {listing.rating ? `Graded ${listing.rating}/5` : ''}
                            </Typography>
                           {listing.reviews ?
                            <Typography variant="subtitle1">
                                {listing.reviews} reviews
                            </Typography> :
                            <Typography variant="subtitle1">
                                No reviews
                            </Typography>}
                        </div>
                    </div>
                    <div style={{width:"100%",display:'flex', justifyContent:"space-between"}}>
                        <Typography variant="subtitle2">
                            {listing.location}
                        </Typography>
                        {listing.offer ? 
                        <Typography variant="subtitle1" color={"secondary"} style={{fontWeight:"900"}}>
                           SALE ${listing.discount} /night
                        </Typography> :
                        <Typography variant="subtitle1" style={{fontWeight:"900"}} >
                           ${listing.price} /night
                     </Typography> }
                    </div>
                    <div style={{width:"100%", justifyContent:"space-between", display:"flex"}}>
                        <div style={{width:"100%",display:'flex'}}>
                            <div className="flex" style={{marginRight:"2rem"}}>
                            <Typography variant="subtitle2">
                                <p style={{display:"inline-flex", fontSize:"1rem", fontWeight:"400"}}> {listing.bedrooms} <LocalHotelIcon color={"primary"} style={{marginRight:"0.5cm",marginLeft:"0.3rem"}}/></p> 
                            </Typography>
                            <Typography variant="subtitle2">
                                <p style={{display:"inline-flex", fontSize:"1rem", fontWeight:"400"}}> {listing.bathrooms} <ShowerIcon color={"primary"} style={{marginLeft:"0.1rem",marginRight:"0.4cm"}}/></p> 
                            </Typography>
                            <Typography variant="subtitle2">
                                <p style={{display:"inline-flex", fontSize:"1rem", fontWeight:"400"}}> {listing.people} <PeopleIcon color={"primary"} style={{marginLeft:"0.1rem"}}/></p> 
                            </Typography>
                            </div>
                            <div className="flex" style={{marginTop:"0.8rem"}}>
                            { listing.pool && 
                                <Chip style={{marginLeft:"0.5rem", backgroundColor:"rgb(237 222 227)"}} label="pool"/>
                            }
                            { listing.kitchen && 
                                <Chip style={{marginLeft:"0.5rem" , backgroundColor:"rgb(237 222 227)"}} label="kitchen"/>
                            }
                            { listing.spa && 
                                <Chip style={{marginLeft:"0.5rem", backgroundColor:"rgb(237 222 227)"}} label="spa"/>
                            }
                            { listing.parking && 
                                <Chip style={{marginLeft:"0.5rem",backgroundColor:"rgb(237 222 227)"}} label="parking"/>
                            }
                            </div>   
                        </div>
                        <div style={{marginTop:"0.8rem"}}>
                            <Button variant="contained" color={"secondary"} onClick={()=>window.location.href=`http://localhost:3000/listings/${listing._id}/rent`}>
                                Checkout
                            </Button>
                        </div>
                    </div>
                    <Typography variant='subtitle2' style={{fontWeight:400, fontSize:"1rem"}}>
                        {listing.description.slice(0,200)}...
                    </Typography>
                    </CardActionArea>
                </div>
            </ListItem>
        )}
    </List>
    <Divider/>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
        <ReactPaginate
            previousLabel={'<'}
            nextLabel={searchedListings.length > 0 ? ">" : ""}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
        />
    </Box>
    </Card> 
    </> : 
    <div style={{width:"100%",textAlign:"center"}}>
        <Typography variant="h4" color={"gray"} style={{paddingTop:"5cm", fontSize:"1.5rem"}}>
        Currently, there are no listings avalabile under the specified conditions
        </Typography>
    </div>
    }
    </div>
    </div>
    </>
}

export default withRoot(SearchedListings)