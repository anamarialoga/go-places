import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

import useStyles from './placeStyles.js';

const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const classes = useStyles();

  return (
    <Card elevation={0}>
    <div style={{display:'flex', backgroundColor: 'whitesmoke'}} >
        <CardMedia
            style={{ height: '9rem', width: '12rem'}}
            image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
            title={place.name}
        />
        <CardContent >
        <Box display="flex" justifyContent="space-between">
            <h3 style={{marginTop: '0rem', fontWeight: '600'}}>{place.name}</h3>
            <Typography gutterBottom variant="subtitle1" style={{fontFamily:  'Montserrat'}}>
                {place.price_level}
            </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography style={{fontFamily:  'Montserrat', marginRight:'5px'}} component="legend">Ranked</Typography>
          <Typography gutterBottom variant="subtitle" style={{marginTop: '2px'}}>
            {place.ranking}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" my={2}>
                <Rating style={{marginTop:'-1rem'}} name="read-only" value={Number(place.rating)} precision={0.5} readOnly />
                <div display={"flex"} style={{marginTop: '-1rem' }}>
                {place?.cuisine?.map(({ index, name}) => (
                    <Chip key={index} size="x-small" label={name} className={classes.chip} />
                ))}
                </div>
        </Box>
        </CardContent>
    </div>
    <CardActions style={{marginTop: '-2rem', paddingTop:'2rem'}}>
        <Button size="small" style={{color: "#00cc66"}} onClick={() => window.open(place.web_url, '_blank')}>
            Trip Advisor
        </Button>
        <Button size="small" style={{color: "#00cc66"}} onClick={() => window.open(place.website, '_blank')}>
            Website
        </Button>
    </CardActions>
    </Card>
  );
};

export default PlaceDetails;