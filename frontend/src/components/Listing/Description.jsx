import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { ListItemButton } from '@mui/material';
import withRoot from '../../withRoot';
import ReadMore from '../ReadMore';

function FeaturedPost(props) {

  const [open, setOpen] = React.useState(false);
  const handleClose = (e) => {e.preventDefault(); e.stopPropagation(); setOpen(false);}

  return (
    <Grid item xs={12} md={5} >
        <Card sx={{ display: 'flex' , height: "6cm"}}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5" style={{fontWeight: "800"}}>
              {props.listing?.name}
            </Typography>
            <br/>
            <br/>
            <Typography variant="subtitle1" color="text.secondary">
           { props.listing?.description? props.listing.description.slice(0,50)+' ...' : ""}
            </Typography>
            {props.listing?.description && 
            <ListItemButton onClick={(e)=>{e.preventDefault(); e.stopPropagation(); setOpen(true)}} style={{ fontWeight: 600, marginLeft:"-1rem", fontSize: "1rem", color: "#ff3366", width:"8rem"}}  variant={"text"}>
                  [Read More]
            </ListItemButton>}
            {open && <ReadMore listing={props.listing} open={open} handleClose={handleClose}/>}
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: "5cm", display: { xs: 'none', sm: 'block' } }}
            src={`http://127.0.0.1:8888/${props.listing?.images[0]}`}
            alt={props.listing?.images[0].name}
          />
        </Card>
    </Grid>
  );
}



export default withRoot(FeaturedPost);
