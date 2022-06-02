import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import GoogleMapReact from 'google-map-react';
import mapStyles from './mapStyles';
import Rating from '@mui/material/Rating';
import withRoot from '../../withRoot';
// import GpsFixedOutlinedIcon from '@mui/icons-material/GpsFixedOutlined';

function Map(props) {
  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
                <div style={{    height: '10vh' ,width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAj7Ry3Vg3NZ9woGl1PapWLjWqMSqISIDo' }}
                    defaultCenter={props.coords}
                    center={props.coords}
                    defaultZoom={15}
                    margin={[50, 50, 50, 50]}
                    options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
                >
                     <div
                        style={{ position:'absolute', transform: 'translate(-50%, -50%)', zIndex: 9, '&:hover': { zIndex: 2 }}}
                        lat={Number(props?.coords?.lat)}
                        lng={Number(props?.coords?.lng)}
                    >  
                           <Paper elevation={3} style={{padding: '10px', backgroundColor: '#ffffffc2', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '110px'}}>
                            <Typography  variant="subtitle2" gutterBottom> {props?.listing?.name}</Typography>
                            <img
                                alt= "image1"
                                style={{cursor:"pointer"}}
                                src={`http://127.0.0.1:8888/${props?.listing?.images[0]}`}
                            />
                            <Rating name="read-only" size="small" value={5} readOnly />
                            </Paper>
                    </div> 
                </GoogleMapReact>
             </div>
    </Paper>
  );
}


export default withRoot(Map);
