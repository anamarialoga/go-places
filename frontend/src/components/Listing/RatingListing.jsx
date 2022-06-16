import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {CardActions, Divider, Rating} from '@mui/material';
import withRoot from '../../withRoot';

function RatingListing(props) {

  let avg=0;
  let nrReviews = 0;

for(let i=0; i<props.listing.average.length; i++){
  nrReviews = nrReviews + 1;
}

  props.listing?.average?.forEach((elem) => {
    avg = avg + Number(elem.rating);
  });


  return (
    <Grid item xs={12} md={3} >
        <Card sx={{ marginTop: '1rem',display: 'flex' , width:"10cm"}}>
        <div className='block' style={{width: "100%"}}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5" style={{fontWeight: "800"}}>
               {nrReviews === 1? '1 Review' : `${nrReviews} Reviews`} 
            </Typography>
            <Typography  variant="subtitile1" color={'text.secondary'} style={{fontWeight: "800"}}>
                The average grade and rating given by our customers
            </Typography>
          </CardContent>
          <Divider />
          <CardActions >      
            <div style={{display: 'inline-flex', width:"100%", justifyContent: "space-between"}}>
            <Rating size='large' readOnly defaultValue={avg ?? 0} precision={0.5}/>
            <Typography component="h2" variant="h5" style={{marginRight:"1rem", fontWeight: "800"}}>
              {(avg/nrReviews).toFixed(1) ?? 0} /5 
              </Typography>
            </div>
          </CardActions>
          </div>
        </Card>
    </Grid>
  );
}



export default withRoot(RatingListing);