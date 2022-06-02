import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { ListItemButton } from '@mui/material';
import withRoot from '../../withRoot';

function FeaturedPost(props) {

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5" style={{fontWeight: "800"}}>
              {props.listing?.name}
            </Typography>
            <br/>
            <Typography variant="subtitle1" color="text.secondary">
           { props.listing?.description? props.listing.description.slice(0,120)+' ...' : ""}
            </Typography>
            {props.listing?.description && <ListItemButton style={{ fontWeight: 600, marginLeft:"-1rem", fontSize: "1rem", color: "#ff3366"}}  variant={"text"}>
                  [Read More]
              </ListItemButton>}
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: "6cm", display: { xs: 'none', sm: 'block' } }}
            src={`http://127.0.0.1:8888/${props.listing?.images[0]}`}
            alt={props.listing?.images[0].name}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}



export default withRoot(FeaturedPost);
