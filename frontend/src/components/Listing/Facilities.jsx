import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import withRoot from '../../withRoot';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import ShowerIcon from '@mui/icons-material/Shower';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import ApartmentIcon from '@mui/icons-material/Apartment';
import VillaIcon from '@mui/icons-material/Villa';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PoolIcon from '@mui/icons-material/Pool';
import SpaIcon from '@mui/icons-material/Spa';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import ForestIcon from '@mui/icons-material/Forest';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import WorkIcon from '@mui/icons-material/Work';
import KitchenIcon from '@mui/icons-material/Kitchen';

function Facilities(props) {

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5" style={{fontWeight: "800"}}>
              About
            </Typography>
            <br/>

            {props?.listing?.purpose === 'beach' &&(
                <Typography variant="subtitle1" color="secondary">
                    <BeachAccessIcon style={{paddingTop: "0.3rem"}} />  Beach 
                </Typography>
            )}
            {props?.listing?.purpose === 'ski' &&(
                <Typography variant="subtitle1" color="secondary">
                    <DownhillSkiingIcon style={{paddingTop: "0.3rem"}} />  Ski
                </Typography>
            )}
            {props?.listing?.purpose === 'nature' &&(
                <Typography variant="subtitle1" color="secondary">
                    <ForestIcon style={{paddingTop: "0.3rem"}} />  Nature
                </Typography>
            )}
            {props?.listing?.purpose === 'citybreak' &&(
                <Typography variant="subtitle1" color="secondary">
                    <AddAPhotoIcon style={{paddingTop: "0.3rem"}} />  City Break
                </Typography>
            )}
            {props?.listing?.purpose === 'business' &&(
                <Typography variant="subtitle1" color="secondary">
                    <WorkIcon style={{paddingTop: "0.3rem"}} />  Business Trip
                </Typography>
            )}

         
            {props?.listing?.type === 'hotel' &&(
                <Typography variant="subtitle1" color="text.secondary">
                    <DryCleaningIcon color={"primary"} style={{paddingTop: "0.3rem"}} /> Hotel Room
                    <PeopleAltIcon color={"primary"} style={{paddingTop: "0.4rem"}}/> {props.listing?.people ?? '2'} People
                </Typography>
            )}
            {props?.listing?.type === 'apartment' &&
                <Typography variant="subtitle1" color="text.secondary">
                    <ApartmentIcon color={"primary"} style={{paddingTop: "0.3rem"}}/> Apartment
                    <PeopleAltIcon color={"primary"} style={{paddingTop: "0.4rem"}}/> {props.listing?.people ?? '2'} People
                </Typography>
            }
            {props?.listing?.type === 'villa' && 
                <Typography variant="subtitle1" color="text.secondary">
                    <VillaIcon color={"primary"} style={{paddingTop: "0.3rem"}} /> Villa
                    <PeopleAltIcon color={"primary"} style={{paddingTop: "0.4rem"}}/> {props.listing?.people ?? '2'} People
                </Typography>
            }

            <Typography variant="subtitle1" color="text.secondary">
                <LocalHotelIcon color={"primary"} style={{paddingTop: "0.3rem"}}/> {props?.listing?.bedrooms} {props.listing?.bedrooms >1? ' Bedrooms' : 'Bedroom'}
                <ShowerIcon color={"primary"} style={{paddingTop: "0.3rem"}} />  {props.listing?.bathrooms} {props.listing?.bathrooms >1? ' Bathrooms' : 'Bathroom'}
            </Typography>

             <div className='flex'>
                { props.listing?.parking && 
                <Typography variant="subtitle1" color="text.secondary">
                    <LocalParkingIcon color={"primary"} style={{paddingTop: "0.3rem"}}/> Parking
                </Typography>
                }
                { props.listing?.pool && 
                <Typography variant="subtitle1" color="text.secondary">
                    <PoolIcon color={"primary"} style={{paddingTop: "0.3rem"}}/> Pool
                </Typography>
                }
                { props.listing?.spa  && 
                <Typography variant="subtitle1" color="text.secondary">
                    <SpaIcon color={"primary"} style={{paddingTop: "0.3rem"}}/> Spa
                </Typography>
                }
                { props.listing?.kitchen && 
                <Typography variant="subtitle1" color="text.secondary">
                    <KitchenIcon color={"primary"} style={{paddingTop: "0.3rem"}}/> Kitchen
                </Typography>
                }
            </div>

          </CardContent>
         {props?.listing?.images[1] && <CardMedia
            component="img"
            sx={{ width: "6cm", display: { xs: 'none', sm: 'block' } }}
            src={`http://127.0.0.1:8888/${props.listing?.images[1]}`}
            alt={props.listing?.images[1]?.name}
          />}
        </Card>
      </CardActionArea>
    </Grid>
  );
}



export default withRoot(Facilities);