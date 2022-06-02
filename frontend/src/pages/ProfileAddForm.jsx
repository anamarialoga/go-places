import {  Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useContext, useEffect } from 'react';
import { TextField } from '@mui/material';
import withRoot from '../withRoot';
import { FormContext } from '../context/formContext';
import AppAppBar from '../views/AppAppBar';
import SidebarProfile from '../components/Profile/SidebarProfile';
import AppForm from '../views/AppForm'
import { Loading } from '../components/Loading';

function AddListing () {
    const {
        cancelListing, 
        loading, 
        setLoading, 
        listing, 
        onSubmitForm, 
        onMutate, 
    } = useContext(FormContext);

    const {
        type,
        name,
        bedrooms,
        bathrooms,
        pool,
        spa,
        parking,
        offer,
        price,
        discount,
        // eslint-disable-next-line no-unused-vars
        images,
        latitude,
        longitude, 
        location,
        geoloc,
        purpose,
        description,
    } = listing;


    useEffect(()=>{
        setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        onSubmitForm(e, listing);

    }

return loading? <Loading/> : (
    <>
    <SidebarProfile/>
    <div style={{marginLeft: "10%"}}>
    <AppForm >
    < FormControl fullWidth>
        <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            variant="outlined"
            value={name}
            maxLength='20'
            minLength='5'
            onChange={onMutate}
            required
            style={{marginBottom: '0.5rem', marginTop: '-2rem', backgroundColor: "white"}}
        />
        <TextField
            style={{marginBottom: '0.9rem', backgroundColor: "white"}}
            autoFocus
            margin="dense"
            name="location"
            label="Address"
            type="text"
            variant="outlined"
            onChange={onMutate}
            value={location}
            required
        />

      <FormControl  style={{marginBottom: '0.5rem', backgroundColor: "white"}}>
          <InputLabel>Geolocation Services</InputLabel>
          <Select name="geoloc" value={geoloc}  onChange={onMutate}>
              <MenuItem  value={'true'}>Yes</MenuItem>
              <MenuItem  value={'false'}>No</MenuItem>
          </Select>
      </FormControl>

      { (geoloc === false) &&
       (
          <div className='flex'  style={{marginBottom: '0.7rem', }}>
                <TextField             
                    autoFocus
                    margin="dense"
                    name="latitude"
                    label="Latitude"
                    type="number"
                    style={{width: "50%", backgroundColor: "white"}}
                    variant="outlined"
                    onChange={onMutate}
                    value={latitude}
                    required/>
                <TextField
                    autoFocus
                    margin="dense"
                    name="longitude"
                    label="Longitude"
                    type="number"
                    style={{width: "50%", marginLeft:"1rem", backgroundColor: "white"}}
                    variant="outlined"
                    onChange={onMutate}
                    value={longitude}
                    required
                />
          </div>
          )
      }
    <div className='flex' style={{marginBottom: '0.5rem'}}>
    <FormControl fullWidth  style={{marginRight: "1rem", backgroundColor: "white"}}>
          <InputLabel>Purpose</InputLabel>
          <Select  name="purpose" value={purpose} onChange={onMutate}>
              <MenuItem value={"ski"}>Ski</MenuItem>
              <MenuItem value={"beach"}>Beach</MenuItem>
              <MenuItem value={"nature"}>Nature</MenuItem>
              <MenuItem value={"citybreak"}>City Break</MenuItem>
              <MenuItem value={"business"}>Business Trip</MenuItem>
          </Select>
    </FormControl>
    <FormControl fullWidth style={{backgroundColor: "white"}}>
          <InputLabel>Type</InputLabel>
          <Select  name="type" value={type} onChange={onMutate}>
              <MenuItem value={"hotel"}>Hotel</MenuItem>
              <MenuItem value={"apartment"}>Apartment</MenuItem>
              <MenuItem value={"villa"}>Villa</MenuItem>
          </Select>
    </FormControl>
    </div>

    <div className='flex'  style={{marginBottom: '0.8rem'}}>
    <FormControl fullWidth  style={{marginRight: "1rem"}}>         
            <TextField
                    autoFocus
                    margin="dense"
                    name="bedrooms"
                    label="Bedrooms"
                    type="number"
                    variant="outlined"
                    style={{backgroundColor: "white"}}
                    onChange={onMutate}
                    value={bedrooms}
                    required
                />
    </FormControl>
    <FormControl fullWidth >
            <TextField
                    autoFocus
                    margin="dense"
                    name="bathrooms"
                    label="Bathrooms"
                    type="number"
                    variant="outlined"
                    style={{backgroundColor: "white"}}
                    onChange={onMutate}
                    value={bathrooms}
                    required
                />
    </FormControl>
    </div>

    <div className='flex' style={{marginBottom: '1rem'}}>
    <FormControl fullWidth  style={{marginRight: "1rem", backgroundColor: "white"}}>
          <InputLabel>Pool</InputLabel>
          <Select  name="pool" value={pool}  onChange={onMutate}>
                <MenuItem  value={'true'}>Yes</MenuItem>
                <MenuItem  value={'false'}>No</MenuItem>
          </Select>
    </FormControl>
    <FormControl fullWidth style={{marginRight: "1rem", backgroundColor: "white"}}>
          <InputLabel>Parking</InputLabel>
          <Select  name="parking" value={parking}  onChange={onMutate}>
                <MenuItem  value={'true'}>Yes</MenuItem>
                <MenuItem  value={'false'}>No</MenuItem>
          </Select>
    </FormControl>
    <FormControl fullWidth style={{backgroundColor: "white"}}>
          <InputLabel>Spa</InputLabel>
          <Select  name="spa" value={spa}  onChange={onMutate}>
                <MenuItem  value={'true'}>Yes</MenuItem>
                <MenuItem  value={'false'}>No</MenuItem>
          </Select>
    </FormControl>
    </div>

    <div className='flex' style={{marginBottom: '1rem'}}>
    <FormControl fullWidth  style={{marginRight: "1rem"}}>
          <InputLabel >Offer</InputLabel>
          <Select  name="offer" value={offer}  onChange={onMutate} style={{backgroundColor:"white"}}>
                <MenuItem  value={'true'}>Yes</MenuItem>
                <MenuItem  value={'false'}>No</MenuItem>
          </Select>
    </FormControl>
    <FormControl fullWidth style={{ marginTop: '-0.5rem'}}>
          <TextField
                    autoFocus
                    margin="dense"
                    name="price"
                    label="Regular Price"
                    type="number"
                    style={{width: "100%", backgroundColor: "white"}}
                    variant="outlined"
                    onChange={onMutate}
                    value={price}
                    required
                />
    </FormControl>
    {(offer === true) && 
    <FormControl fullWidth style={{marginLeft: "1rem",  marginTop: '-0.5rem'}}>
          <TextField
                    autoFocus
                    margin="dense"
                    name="discount"
                    label="Discount Price"
                    type="number"
                    style={{width: "100%", backgroundColor: "white"}}
                    variant="outlined"
                    onChange={onMutate}
                    value={discount}
                    required
                />
    </FormControl>}
    </div>

    
    <TextField
            className='formInputFile'
            autoFocus
            margin="dense"
            id="images"
            type="file"
            fullWidth
            variant="outlined"
            onChange={onMutate}
            multiple
            max='8'
            accept=".png, .jpg, .jpeg"
            required
            style={{marginTop: '-0.2rem', backgroundColor: "white"}}
        />
    <Typography variant={"subtitle2"} style={{fontWeight:'500', marginLeft: '0.2rem'}} >
      The first image will be the cover (maximum 8) 
    </Typography>
    
    <FormControl fullWidth >
        <TextField
                autoFocus
                margin="dense"
                name="description"
                label="Description"
                type="text"
                multiline
                style={{width: "100%", backgroundColor: "white"}}
                variant="outlined"
                onChange={onMutate}
                value={description}
            />
    </FormControl>

    <Button
        variant={"contained"}
        color={"secondary"}
        sx={{ mt: 3, mb: 1 }}
        size="large"
        fullWidth
        type={'submit'} 
        onClick={handleSubmit}
        >
        Submit Listing
    </Button>
    <Button  color={"secondary"} style={{marginBottom: '-3rem'}} variant='text' onClick={cancelListing}>Cancel Listing</Button>
    </FormControl>
    </AppForm>
    </div>
    </>
)}

export default withRoot(AddListing);