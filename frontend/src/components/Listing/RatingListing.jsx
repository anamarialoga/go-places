import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import {CardActions, Divider, Rating} from '@mui/material';
import withRoot from '../../withRoot';

function RatingListing(props) {

  return (
    <Grid item xs={12} md={3} >
      <CardActionArea component="a" href="#">
        <Card sx={{ marginTop: '1rem',display: 'flex' , width:"10cm"}}>
        <div className='block' style={{width: "100%"}}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5" style={{fontWeight: "800"}}>
                Reviews
            </Typography>
            <Typography  variant="subtitile1" color={'text.secondary'} style={{fontWeight: "800"}}>
                The average grade and rating given by our customers
            </Typography>
          </CardContent>
          <Divider />
          <CardActions >      
            <div style={{display: 'inline-flex', width:"100%", justifyContent: "space-between"}}>
            <Rating size='large' readOnly defaultValue={props.listing?.rating ?? 5} precision={0.5}/>
            <Typography component="h2" variant="h5" style={{marginRight:"1rem", fontWeight: "800"}}>
              {props.listing?.rating ?? 5} /5 
              </Typography>
            </div>
          </CardActions>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
}



export default withRoot(RatingListing);