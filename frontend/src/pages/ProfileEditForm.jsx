import {  Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useContext, useEffect } from 'react';
import { TextField } from '@mui/material';
import withRoot from '../withRoot';
import { FormContext } from '../context/formContext';
import SidebarProfile from '../components/Profile/SidebarProfile';
import AppForm from '../views/AppForm'
import { useParams } from 'react-router-dom';
import { Loading } from '../components/Loading';

function EditListing () {
    const {listingid} = useParams();

    const {
        onChange,
        fetchListing,
        onUpdateForm, 
        loading,
        thisListing,
        cancelListing,
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
        kitchen,
        people,
    } = thisListing;


    useEffect(()=>{
        fetchListing(listingid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        onUpdateForm(e, thisListing, thisListing._id);
    }

return loading? <Loading/>: (
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
            onChange={onChange}
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
            onChange={onChange}
            value={location}
            required
        />

      <FormControl  style={{marginBottom: '0.5rem', backgroundColor: "white"}}>
          <InputLabel>Geolocation Services</InputLabel>
          <Select name="geoloc" value={geoloc}  onChange={onChange}>
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
                    onChange={onChange}
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
                    onChange={onChange}
                    value={longitude}
                    required
                />
          </div>
          )
      }
    <div className='flex' style={{marginBottom: '0.5rem'}}>
    <FormControl fullWidth  style={{marginRight: "1rem", backgroundColor: "white"}}>
          <InputLabel>Purpose</InputLabel>
          <Select  name="purpose" value={purpose} onChange={onChange}>
              <MenuItem value={"ski"}>Ski</MenuItem>
              <MenuItem value={"beach"}>Beach</MenuItem>
              <MenuItem value={"nature"}>Nature</MenuItem>
              <MenuItem value={"citybreak"}>City Break</MenuItem>
              <MenuItem value={"business"}>Business Trip</MenuItem>
          </Select>
    </FormControl>
    <FormControl fullWidth style={{backgroundColor: "white"}}>
          <InputLabel>Type</InputLabel>
          <Select  name="type" value={type} onChange={onChange}>
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
                    onChange={onChange}
                    value={bedrooms}
                    required
                />
    </FormControl>
    <FormControl fullWidth  style={{marginRight: "1rem"}}>         
            <TextField
                    autoFocus
                    margin="dense"
                    name="people"
                    label="People"
                    type="number"
                    variant="outlined"
                    style={{backgroundColor: "white"}}
                    onChange={onChange}
                    value={people}
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
                    onChange={onChange}
                    value={bathrooms}
                    required
                />
    </FormControl>
    </div>

    <div className='flex' style={{marginBottom: '1rem'}}>
    <FormControl fullWidth  style={{marginRight: "1rem", backgroundColor: "white"}}>
          <InputLabel>Pool</InputLabel>
          <Select  name="pool" value={pool}  onChange={onChange}>
                <MenuItem  value={'true'}>Yes</MenuItem>
                <MenuItem  value={'false'}>No</MenuItem>
          </Select>
    </FormControl>
    <FormControl fullWidth style={{marginRight: "1rem", backgroundColor: "white"}}>
          <InputLabel>Parking</InputLabel>
          <Select  name="parking" value={parking}  onChange={onChange}>
                <MenuItem  value={'true'}>Yes</MenuItem>
                <MenuItem  value={'false'}>No</MenuItem>
          </Select>
    </FormControl>
    {type === 'hotel' && <FormControl fullWidth style={{backgroundColor: "white"}}>
          <InputLabel>Spa</InputLabel>
          <Select  name="spa" value={spa}  onChange={onChange}>
                <MenuItem  value={'true'}>Yes</MenuItem>
                <MenuItem  value={'false'}>No</MenuItem>
          </Select>
    </FormControl>}
    { type !== 'hotel' &&<FormControl fullWidth  style={{ backgroundColor: "white"}}>
            <InputLabel>Kitchen</InputLabel>
            <Select  name="kitchen" value={kitchen}  onChange={onChange}>
                <MenuItem  value={'true'}>Yes</MenuItem>
                <MenuItem  value={'false'}>No</MenuItem>
            </Select>
    </FormControl>}
    </div>

    <div className='flex' style={{marginBottom: '1rem'}}>
    <FormControl fullWidth  style={{marginRight: "1rem"}}>
          <InputLabel >Offer</InputLabel>
          <Select  name="offer" value={offer}  onChange={onChange} style={{backgroundColor:"white"}}>
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
                    onChange={onChange}
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
                    onChange={onChange}
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
            onChange={onChange}
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
                onChange={onChange}
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
        Update Listing
    </Button>
    <Button  color={"secondary"} style={{marginBottom: '-3rem'}} variant='text' onClick={cancelListing}>Cancel Listing</Button>
    </FormControl>
    </AppForm>
    </div>
    </>
)}

export default withRoot(EditListing);