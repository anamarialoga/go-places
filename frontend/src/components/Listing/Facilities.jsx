import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
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
import InfoIcon from '@mui/icons-material/Info';

function Facilities(props) {

  return (
    <Grid item xs={12} md={4}>
        <Card sx={{ display: 'flex',  height: "6cm" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5" style={{fontWeight: "800"}}>
                <div style={{display: "inline-flex"}}>
                <InfoIcon style={{paddingTop: '0.2rem', marginRight:"0.5rem"}}/> About
                </div> 
            </Typography>
            <br/>

            {props?.listing?.purpose === 'beach' &&(
                <Typography variant="subtitle1" color="secondary">
                     <div style={{display: "inline-flex", marginRight:"0.5rem"}}>
                    <BeachAccessIcon style={{paddingTop: "0.3rem"}} />  Beach 
                    </div>
                </Typography>
            )}
            {props?.listing?.purpose === 'ski' &&(
                <Typography variant="subtitle1" color="secondary">
                    <div style={{display: "inline-flex", marginRight:"0.5rem"}}>
                    <DownhillSkiingIcon style={{paddingTop: "0.3rem"}} />  Ski
                    </div>
                </Typography>
            )}
            {props?.listing?.purpose === 'nature' &&(
                <Typography variant="subtitle1" color="secondary">
                     <div style={{display: "inline-flex", marginRight:"0.5rem"}}>
                    <ForestIcon style={{paddingTop: "0.3rem"}} />  Nature
                    </div>
                </Typography>
            )}
            {props?.listing?.purpose === 'citybreak' &&(
                <Typography variant="subtitle1" color="secondary">
                      <div style={{display: "inline-flex", marginRight:"0.5rem"}}>
                    <AddAPhotoIcon style={{paddingTop: "0.3rem"}} />  City Break
                    </div>
                </Typography>
            )}
            {props?.listing?.purpose === 'business' &&(
                <Typography variant="subtitle1" color="secondary">
                      <div style={{display: "inline-flex", marginRight:"0.5rem"}}>
                    <WorkIcon style={{paddingTop: "0.3rem"}} />  Business Trip
                    </div>
                </Typography>
            )}

         
            {props?.listing?.type === 'hotel' &&(
                <Typography variant="subtitle1" color="text.secondary">
                      <div style={{display: "inline-flex", marginRight:"0.5rem"}}>
                    <DryCleaningIcon color={"primary"} style={{paddingTop: "0.3rem"}} /> Hotel Room
                    </div>
                    <div style={{display: "inline-flex"}}>
                    <PeopleAltIcon color={"primary"} style={{paddingTop: "0.4rem"}}/> {props.listing?.people ?? '2'} People
                    </div>
                </Typography>
            )}
            {props?.listing?.type === 'apartment' &&
                <Typography variant="subtitle1" color="text.secondary">
                      <div style={{display: "inline-flex",marginRight:"0.5rem"}}>
                    <ApartmentIcon color={"primary"} style={{paddingTop: "0.3rem"}}/> Apartment
                    </div>
                    <div style={{display: "inline-flex"}}>
                    <PeopleAltIcon color={"primary"} style={{paddingTop: "0.4rem"}}/> {props.listing?.people ?? '2'} People
                    </div>
                </Typography>
            }
            {props?.listing?.type === 'villa' && 
                <Typography variant="subtitle1" color="text.secondary">
                      <div style={{display: "inline-flex",marginRight:"0.5rem"}}>
                    <VillaIcon color={"primary"} style={{paddingTop: "0.3rem"}} /> Villa
                    </div>
                    <div style={{display: "inline-flex"}}>
                    <PeopleAltIcon color={"primary"} style={{paddingTop: "0.4rem"}}/> {props.listing?.people ?? '2'} People
                    </div>
                </Typography>
            }

            <Typography variant="subtitle1" color="text.secondary">
                <div style={{display: "inline-flex",marginRight:"0.5rem"}}>
                <LocalHotelIcon color={"primary"} style={{paddingTop: "0.3rem"}}/> {props?.listing?.bedrooms} {props.listing?.bedrooms >1? ' Bedrooms' : 'Bedroom'}
                </div>
                <div style={{display: "inline-flex"}}>
                <ShowerIcon color={"primary"} style={{paddingTop: "0.3rem"}} />  {props.listing?.bathrooms} {props.listing?.bathrooms >1? ' Bathrooms' : 'Bathroom'}
                </div>
            </Typography>

             <div className='flex'>
                { props.listing?.parking && 
                <Typography variant="subtitle1" color="text.secondary">
                      <div style={{display: "inline-flex", marginRight:"0.5rem"}}>
                    <LocalParkingIcon color={"primary"} style={{paddingTop: "0.3rem"}}/> Parking
                    </div>
                </Typography>
                }
                { props.listing?.pool && 
                <Typography variant="subtitle1" color="text.secondary">
                      <div style={{display: "inline-flex", marginRight:"0.5rem"}}>
                    <PoolIcon color={"primary"} style={{paddingTop: "0.3rem"}}/> Pool
                    </div>
                </Typography>
                }
                { props.listing?.spa  && 
                <Typography variant="subtitle1" color="text.secondary">
                      <div style={{display: "inline-flex", marginRight:"0.5rem"}}>
                    <SpaIcon color={"primary"} style={{paddingTop: "0.3rem"}}/> Spa
                    </div>
                </Typography>
                }
                { props.listing?.kitchen && 
                <Typography variant="subtitle1" color="text.secondary">
                      <div style={{display: "inline-flex", marginRight:"0.5rem"}}>
                    <KitchenIcon color={"primary"} style={{paddingTop: "0.3rem"}}/> Kitchen
                    </div>
                </Typography>
                }
            </div>
          </CardContent>
        </Card>
    </Grid>
  );
}



export default withRoot(Facilities);