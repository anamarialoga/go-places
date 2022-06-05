import * as React from 'react';
import DatePickerCalendar from '../components/Explore/DatePickerCalendar';
import TextField from '@mui/material/TextField';
import Typography from '../components/Typography.js';
import ProductHeroLayout from './ProductHeroLayout';
import { Autocomplete, Button } from '@mui/material';
import Sidebar from '../components/Explore/Sidebar';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { AppContext } from '../context/appContext';
import { toast } from 'react-toastify';
import SearchResults from '../components/Explore/SearchResults';


const backgroundImage =
  'http://127.0.0.1:8888/ian-dooley-DuBNA1QMpPA-unsplash.jpg';


export default function AppMainExplore() {

  const [sidebar, setSideBar] = React.useState(false);
  const onSidebar=()=>{
    setSideBar(!sidebar);
  }

  const {fetchAllListings, listings, searchedLoc, setSearchedLoc, searchedListings,fetchSearchedListings, dateRange } = React.useContext(AppContext)

  const [submit, setSubmit] = React.useState(false)

  React.useEffect(()=>{
    fetchAllListings();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  React.useEffect(()=>{
    setSubmit(false)
  },[])

  let addressesDuplic = [];
  listings.map((listing)=>
    addressesDuplic.push(listing.location)
  )
  const addresses = [...new Set(addressesDuplic)]


  let countriesDuplic =[];
  listings.map((listing)=>
    listing.location.split(',').slice(-1).map((country)=> countriesDuplic.push(country))
  )
  const countries = [...new Set(countriesDuplic)]


  let citiesDuplic = [];
  listings.map((listing)=> {
    if(listing.location.split(", ").slice(-2)[0].length !== 2) 
      return(citiesDuplic.push(listing.location.split(",").slice(-2)[0])) 
    else return (citiesDuplic.push(listing.location.split(",").slice(-3)[0]))
  })
  const cities = [...new Set(citiesDuplic)]
  let locationOptions = [];

  const handleSubmit=()=>{
    if(searchedLoc !== "")
        {
           setSubmit(true);
           fetchSearchedListings(searchedLoc, dateRange);
           console.log(searchedLoc)
        }
    else toast.info("You should search for a location first")
  }

  return (
    <div className={submit ? "flex": ""} style={{width:"100%"}}>
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', 
        backgroundPosition: 'center',
        backgroundSize: "cover"
      }}
    >
      <Typography color="inherit" align="center" variant="h2" marked="center">
       Explore
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
         sx={{ mb: 1, mt: { sx: 2, sm: 2 } }}
      >
        Discover the experience
      </Typography>
      <div className='block' style={{marginTop:'2rem', padding:'1rem' }}>
      <DatePickerCalendar 
      />
      <br/>
      <div className='passwordInputDiv'>
      <Autocomplete
      value={searchedLoc}
      onChange={(e, newValue)=> setSearchedLoc(newValue)}
      autoHighlight
      disablePortal
      options={locationOptions.concat(countries).concat(cities).concat(addresses)}
      fullWidth
      renderInput={(params) => 
          <TextField {...params} 
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label={"Search locations"} 
          sx={{backgroundColor: "white"}} />}
      />
      </div>
      <div  style={{ textAlign: 'center', marginTop:"2rem"}}>
        <Button fullWidth variant='contained' onClick={handleSubmit} color={"secondary"} style={{fontSize: "1.1rem"}}>Search</Button>
      </div>
      <div style={{ textAlign: 'center', marginTop: '0.5rem', borderRadius:'0.2rem'}}>
        <Button fullWidth variant={'text'}color={"success"}  onClick={onSidebar}> <FilterAltIcon /> Advanced</Button>
      </div>
      </div>
      <Sidebar sidebar={sidebar} onSidebar={onSidebar}/>
    </ProductHeroLayout>
    {submit && <SearchResults submit={submit} searchedListings={searchedListings} searchedLoc={searchedLoc} startDate={(dateRange.searchDateStart)?.toDateString()} endDate={(dateRange.searchDateEnd)?.toDateString()}/>}
    </div>
  );
}
