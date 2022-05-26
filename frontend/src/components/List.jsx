import React, { useState, useEffect, createRef } from 'react';
import { Grid,  InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from './PlaceDetails';
import useStyles from './listStyles.js';
import { Loading } from './Loading';

const List = ({ places, type, setType, rating, setRating, isLoading , childClicked}) => {
  const [elRefs, setElRefs] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);

  return (
    <div className={classes.container}>
      {isLoading ? (
          <Loading/>  
      ) : (
        <>
        <FormControl>
        <h2 className='attractions' >Food & Attractions</h2>
        </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="type" className='selectClass'>Type</InputLabel>
            <Select  id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem className='selectClass' value="restaurants">Restaurants</MenuItem>
              <MenuItem className='selectClass' value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="rating" className='selectClass'>Rating</InputLabel>
            <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem className='selectClass' value="">All</MenuItem>
              <MenuItem className='selectClass' value="3">Above 3.0</MenuItem>
              <MenuItem className='selectClass' value="4">Above 4.0</MenuItem>
              <MenuItem className='selectClass' value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={2} className={'gridlist'}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={12}>
                <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;