import { Button, Card, CardActions, CardContent, CardMedia, Chip, Divider, FormControl, Grid, InputLabel, List, ListItem, ListItemAvatar, MenuItem, Rating, Select, Typography } from "@mui/material";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import withRoot from "../../withRoot";
import AttractionsIcon from '@mui/icons-material/Attractions';

function Places(props) {
  return (
    <>
    <div style={{width: "60%", marginLeft: "25%"}}>
    <Grid item xs={12} md={12} >
        <Card sx={{ marginTop: '5%',display: 'flex'}}>
        <div className='block' style={{width: "100%"}}>
        <CardContent sx={{ flex: 1 }}>
        <div className="flex" style={{widht:"100%", justifyContent:"space-between"}}>
            <div>
            {props.type==='restaurants' &&
            <Typography component="h2" color={"secondary"} variant="h5" style={{fontWeight: "800"}}>
                <div style={{display:"inline-flex"}}>
                 <RestaurantIcon style={{paddingTop: "0.2rem", marginRight:"0.5rem"}} /> Eat nearby
                </div>
            </Typography>
            }
            {props.type==='attractions' &&
            <Typography component="h2" color={"secondary"} variant="h5" style={{fontWeight: "800"}}>
                <div style={{display:"inline-flex"}}>
                 <AttractionsIcon style={{paddingTop: "0.2rem", marginRight:"0.5rem"}} /> Activities nearby
                </div>
            </Typography>
            }
            <br/>
            {props.type==='restaurants' && 
            <Typography  variant="subtitile1" color={'text.secondary'} style={{fontWeight: "800"}}>
                Local food highly appreciated by worldwide travellers
            </Typography>}
            {props.type==='attractions' && 
            <Typography  variant="subtitile1" color={'text.secondary'} style={{fontWeight: "800"}}>
                Discover the art, architecture, landscapes, history and nightlife in your area
            </Typography>}
            </div>
            <FormControl style={{width: "10rem"}}>
            <InputLabel style={{color:"rgb(241, 143, 159)"}}>Sort by Rating</InputLabel>
            <Select   value={props.rating} onChange={(e) => props.setRating(e.target.value)}>
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>
        </div>
        </CardContent>
        <Divider />
        <CardContent style={{width:"100%"}} >
            <List sx={{ width: '100%', overflow: 'auto', maxHeight: "17cm" , marginTop:"-1rem"}}>
                {props.places?.map((place, i)=>
                (place.name && <ListItem style={{width:"100%"}} key={i} alignItems="flex-start" divider={i<props.places.length -1}>
                    <div className="flex" style={{width:"100%"}}>
                        <div className="block">
                            <ListItemAvatar style={{textAlign:"center"}}>
                                <CardMedia
                                    style={{ height:"8rem", width: '12rem'}}
                                    image={place.photo ? place.photo.images.large.url : 'http://127.0.0.1:8888/no-image-found.png'}
                                    title={place.name}
                                />
                            </ListItemAvatar>
                            <>
                            <CardActions style={{ justifyContent:'center', }}>
                                <Button size="small" color={"secondary"} onClick={() => window.open(place.web_url, '_blank')}>
                                    Trip Advisor
                                </Button>
                                <Button size="small" color={"secondary"} onClick={() => window.open(place.website, '_blank')}>
                                    Website
                                </Button>
                            </CardActions>
                            </>
                        </div>
                        <div style={{marginLeft:"2rem", width:"100%", marginRight:"2rem"}}>
                            <div className="flex" style={{justifyContent:"space-between"}}>
                                <div style={{display:"inline-flex"}}>
                                <h3 style={{marginTop:"0.2rem",marginRight:"1rem", fontWeight: '600'}}>{place.name}</h3>
                                {place.awards?.length>0 && 
                                    <Chip color="secondary" style={{ fontSize:"11px", fontWeight:"500", marginRight:"1rem"}} label={place.awards[0].award_type} size="x-small" />
                                }
                                {
                                    place.is_closed === true? <Typography  gutterBottom color={"secondary"} variant="subtitle1"style={{paddingTop:"0.2rem", fontSize:"1rem"}} >Closed Now</Typography > : <Typography  gutterBottom color={"secondary"} variant="subtitle1" style={{paddingTop:"0.2rem", fontSize:"1rem"}}>Open Now</Typography>
                                }
                                </div>
                                <Typography gutterBottom color={"secondary"} variant="subtitle1" style={{fontWeight:"800"}}>
                                    {place.price_level}
                                </Typography>
                            </div>
                            <div className="flex" style={{justifyContent:"space-between", marginTop:"-0.6rem"}}>
                                <Typography gutterBottom color={"primary"} variant="subtitle1" style={{fontWeight:"400"}}>
                                Ranked {place.ranking}
                                </Typography>
                                <div style={{display:"inline-flex"}}>
                                    <Typography gutterBottom color={"primary"} variant="subtitle1" style={{marginRight:'1rem',fontWeight:"400"}}>
                                        {place.num_reviews} Reviews
                                    </Typography>
                                    <Rating style={{paddingTop:"0.25rem"}} value={Number(place.rating)} precision={0.5} readOnly />
                                    <Typography gutterBottom color={"secondary"} variant="subtitle1" style={{marginLeft:'1rem',fontWeight:"800"}}>
                                        {place.rating}/5
                                    </Typography>
                                </div>
                            </div>
                            <div className="flex" style={{justifyContent:"space-between"}}>
                            <div>
                                {place.category?.key !== 'restaurant' &&
                                    <Chip size="x-small" style={{marginRight:"0.3rem"}} label={place.category?.name}  />
                                }
                            </div>
                            <div>
                                { place.cuisine && place.cuisine?.map(({ name, index}) => (
                                    <Chip key={index} size="x-small" style={{marginRight:"0.3rem"}} label={name}  />
                                ))}
                            </div>
                            <Typography gutterBottom color={"primary"} variant="subtitle1">
                                {place.distance_string} from location 
                            </Typography>
                            </div>
                        { place.description?.length > 0 && 
                            <div>
                                <Typography gutterBottom color={"primary"} variant="subtitle2" style={{fontWeight:"400",fontSize:"1rem"}}>
                                {   place.description.length>=200 ? place.description?.slice(0,200)+" ..." : place.description} 
                                </Typography>
                            </div>
                        }
                        </div>
                    </div>
                </ListItem>)
                )}
            </List>
        </CardContent>
        </div>
        </Card>
    </Grid>
    </div>
    <br/>
    <br/>
    </>
  );
}



export default withRoot(Places);