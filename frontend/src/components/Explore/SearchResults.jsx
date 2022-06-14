import { Button, CardActionArea, CardHeader, Chip, Divider, List, ListItem, ListItemAvatar } from "@mui/material";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import withRoot from "../../withRoot"
import Typography from "../Typography";
import LocalHotelIcon from '@mui/icons-material/Hotel'
import ShowerIcon from '@mui/icons-material/Shower'
import PeopleIcon from '@mui/icons-material/People'
import { Box } from "@mui/system";
import ReadMore from "../ReadMore";
import {useNavigate} from 'react-router-dom'

 const SearchResults = (props) =>{
    const [pageNumber, setPageNumber] = useState(0);
    const listingsPerPage=3;
    const pageCount = Math.ceil(props.searchedListings.length / listingsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const [open, setOpen] = useState(false);
    const handleClose = (e) => {e.preventDefault(); e.stopPropagation(); setOpen(false);}
    const navigate = useNavigate();
return<>
    <div className={!props.submit ? 'dontshow' :"showall"}>
    <div style={{width:"100%", borderRadius:"0"}}>
    <CardHeader style={{color:"#ff3366"}} title={`You searched for: "${props.searchedLoc}" (${props.searchedListings.length} results)`} subheader={`Find the best accomodation in ${props.searchedLoc} with us and enjoy the experience` }  />
    <Divider/>
    {props.searchedListings.length > 0 ?
    <> 
    <List style={{height:'16.4cm'}}>
        {props.searchedListings.slice(pageNumber * listingsPerPage , pageNumber * listingsPerPage + listingsPerPage).map((listing, i) =>
            <CardActionArea  key={i} onClick={()=>navigate(`/listings/${listing._id}`)}>
            <ListItem  divider={i<props.searchedListings.length }>
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
                            <Button variant="contained" color={"secondary"} onClick={()=>navigate(`http://localhost:3000/listings/${listing._id}/rent`)}>
                                Checkout
                            </Button>
                        </div>
                    </div>
                    { listing.description.length>0  ?
                    <div style={{display:"inline-flex"}}>
                        <Typography variant='subtitle2' style={{fontWeight:400, fontSize:"1rem"}}>
                        {listing.description.slice(0,200)}...  
                        <Button variant={"text"} color="secondary" onClick={(e)=>{e.preventDefault(); e.stopPropagation(); setOpen(true)}}>
                            [Read More]
                        </Button>
                        </Typography>
                    </div> :
                    <Typography variant='subtitle2' style={{fontWeight:400, fontSize:"1rem"}}>
                        {listing.description}
                    </Typography>
                    } 
                        {open && <ReadMore listing={listing} open={open} handleClose={handleClose}/>}
                </div>
            </ListItem>
        </CardActionArea>
        )}
    </List> 
    <Divider/>
    <Box
    sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 1,
        mb: 1
    }}
    >
        <ReactPaginate
            previousLabel={'<'}
            nextLabel={props.searchedListings.length > 0 ? ">" : ""}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
        />
    </Box>
    </>
    :
    <div style={{width:"100%",textAlign:"center", height:"18.35cm"}}>
        <Typography variant="h4" color={"gray"} style={{marginLeft:"5%", paddingTop:"10%", fontSize:"1.5rem"}}>
            {`Currently, there are no avalabile listings in ${props.searchedLoc} in the selected dates`}
        </Typography>
    </div> }
    </div> 
    </div>
    </>
 }

 export default withRoot(SearchResults)