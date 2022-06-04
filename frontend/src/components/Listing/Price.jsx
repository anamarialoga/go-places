import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActions, Divider} from '@mui/material';
import withRoot from '../../withRoot';
import PaidIcon from '@mui/icons-material/Paid';

function Price(props) {

  return (
    <Grid item xs={12} md={3} >
        <Card sx={{ display: 'flex' , height: "6cm"}}>
        <div className='block' style={{width: "100%"}}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5" style={{fontWeight: "800"}}>
              <div style={{display: "inline-flex"}}>
                <PaidIcon style={{paddingTop: "0.2rem", marginRight: "0.4rem"}}/> Price {props.listing?.type==='hotel'? "(room)" : "(place)"}
              </div>
            </Typography>
            {props.listing?.offer === true &&  
            <Typography variant="subtitle1" color="secondary" style={{ fontWeight: "900"}}>
                DISCOUNT!
            </Typography>}
            {props.listing?.offer === false &&  
            <>
            <Typography variant="subtitle2" color="text.secondary" style={{fontSize: "1rem"}}>
                The price of this listing did not suffer any changes yet.
            </Typography>
            </> }
            <br/>
            {props.listing?.offer && 
            <>
             <Typography variant="subtitle2" color="text.secondary" style={{fontSize: "1rem", textDecoration:"line-through"}}>
                ${props.listing?.price}  /night
            </Typography>
            <Typography variant="subtitle2" color="primary" style={{fontSize: "1.2rem", marginLeft: "0.5rem"}}>
                ${props.listing?.discount}  /night 
            </Typography>
            </>
           }
            {!props.listing?.offer && 
            <Typography variant="subtitle2" color="primary" style={{fontSize: "1.2rem", marginLeft: "0.5rem"}}>
                ${props.listing?.price}  /night 
            </Typography>
           }
          </CardContent>
          <Divider />
          <CardActions >
              <Button fullWidth variant='contained' color={"secondary"}>
                  RENT
              </Button>
          </CardActions>
          </div>
        </Card>
    </Grid>
  );
}



export default withRoot(Price);