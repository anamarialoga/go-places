import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import withRoot from '../withRoot';
import SidebarListing from '../components/Listing/SidebarListing';
import { useParams } from 'react-router-dom';
import { ListingContext } from '../context/listingContext';
import { Loading } from '../components/Loading';
import { AppContext } from '../context/appContext';
import { Modal, Paper } from '@mui/material';
import AppAppBar from '../views/AppAppBar';
import AppFooter from '../views/AppFooter';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css/bundle'
import {Navigation, EffectFade, Pagination, Autoplay } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'


const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    height: "80%",
    bgcolor: 'white',
    border: '0px solid white',
    boxShadow: 24,
    p: 4,
  };

const backgroundImage = 'http://127.0.0.1:8888/annie-spratt-nWiS2rgtVts-unsplash.jpg';

function ListingAlbum() {

    const [open, setOpen] = React.useState(false);
    const [image, setImage] = React.useState("");
    const handleClose = () => setOpen(false);
  

    const {listingid} = useParams();
    const {listing, fetchListing, loading} = React.useContext(ListingContext);
    const {user} = React.useContext(AppContext)

    React.useEffect(()=>{
        fetchListing(listingid);
    },[])

    return loading? <Loading/> : (
      <>
      <div 
      //style={{backgroundColor: "#fff5f8"}}
      //style={{        background: `url(${backgroundImage})   no-repeat`}}
      >
      <SidebarListing listingid={listingid} listing={listing}/>
      <Box sx={{ mt: 0, mb: 0, ml: 35, mr: 0}}>
          <Paper
            style={{ width:"1630px"}}
          >
            <div style={{  width: '100%'}}>
            <Swiper  modules={[Navigation, EffectFade, Pagination, Autoplay]} navigation pagination={{clickable: true}} effect={'fade'} speed={800} slidesPerView={1} loop={true} autoplay={{ delay: 1000, disableOnInteraction: false}} className='swiper-container'>
            {listing?.images.map((url, index) => (
            <SwiperSlide key={index}>
                <div
                style={{
                    background: `url(http://127.0.0.1:8888/${listing?.images[index]}) center no-repeat`,
                    backgroundSize: 'cover',
                }}
                className='swiperSlideDiv'
                >
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
        </div>
        </Paper>
        </Box>
      <main style={{marginLeft: "10rem"}} >
        <Box
          sx={{
            bgcolor: 'transparent',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="primary"
              gutterBottom
            >
             {listing?.name} Gallery 
            </Typography> 
             <Typography variant="h5" align="center" color="primary" paragraph>
            {listing?.description}
            </Typography> 
          </Container>
        </Box >
        <Container sx={{ paddingBottom: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {listing?.images.map((card, i) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    //  style={{ background: `url(${backgroundImage})  right no-repeat` }}
                    // style={{backgroundColor: "#fff5f8"}}
                    component="img"
                    sx={{
                      height: "6cm",
                      pt: '15%',
                    }}
                    src={`http://127.0.0.1:8888/${card}`}
                    alt={`photo-${i}`}
                  />
                  <CardActions style={{justifyContent: "center", 
                //   background: `url(${backgroundImage}) right no-repeat` 
                  }}>
                        <Button variant={"text"} color={"primary"} id={card} onClick={() => {setOpen(true); setImage(card)}} size="small">View</Button>
                        { (listing.userId === user.id) &&  <Button variant={"text"} color={"primary"}  size="small">Delete</Button> }
                  </CardActions>
                </Card>
              </Grid>
            ))}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{
                    background: `url(http://127.0.0.1:8888/${image})  no-repeat`,
                    backgroundSize: 'cover'
                }}>
                </Box>
            </Modal>
          </Grid>
        </Container>
      </main>
      </div>
      </>
  );
}

export default withRoot(ListingAlbum)