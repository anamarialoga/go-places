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

  const {user, fetchAllListings, listings, searchedLoc, setSearchedLoc, searchedListings,fetchSearchedListings, dateRange } = React.useContext(AppContext)

  const [submit, setSubmit] = React.useState(false)

  React.useEffect(()=>{
    fetchAllListings();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  React.useEffect(()=>{
    setSubmit(false)
    // setFilters((prevState)=>({...prevState, excludeMine: true}))
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
    if(searchedLoc !== ""){

           setSubmit(true);
           fetchSearchedListings(searchedLoc, dateRange);

           console.log(searchedLoc)
      }
    else toast.info("You should search for a location first")
  }



  const [filters, setFilters] = React.useState({
    purpose:"",
    type:"",
    people: 0,
    bathrooms:0,
    bedrooms:0,
    parking: false,
    spa:false,
    pool: false,
    kitchen: false,
    excludeMine: false,
    apply: false,
  })

  const  onChange = (e, newValue)=>{
    if(e.target.name === "purpose" || e.target.name ==="type" || e.target.name ==="bedrooms" || e.target.name==="people" || e.target.name ==="bathrooms")
    {
        setFilters((prevState) => ({...prevState, [e.target.name]: e.target.value}))
    }else
    {
        setFilters((prevState)=>({...prevState, [e.target.name]: newValue}))
    } 
}


const [filteredLocations, setFilteredLocations ] = React.useState([])
  React.useEffect(()=>{
      if(filters.apply === true){
          const filtered = searchedListings.filter((element) => Object.entries(filters)
          .every(([key, val]) => (val !== '' &&  val!==false && val!==0) && (key !== 'apply' && key!=="excludeMine") ? element[key] === val : true))
          setFilteredLocations(filtered)
      }
      if(filters.apply === true && filters.excludeMine === true){
        const filtered = filteredLocations.filter((element) => Object.entries(filters)
        .every(([key, val]) => (val !== '' &&  val!==false && val!==0) && (key !== 'apply' && key!=="excludeMine") ? ((element[key] === val) && (element.userId !== user.id)) : true))
        setFilteredLocations(filtered)
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.apply])


  console.log("filteredLocations", filteredLocations, filteredLocations.length);
  console.log("searchedListings", searchedListings)
  
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
        <Button fullWidth variant='contained' onClick={()=>handleSubmit()} color={"secondary"} style={{fontSize: "1.1rem"}}>Search</Button>
      </div>
      <div style={{ textAlign: 'center', marginTop: '0.5rem', borderRadius:'0.2rem'}}>
        <Button fullWidth variant={'text'}color={"success"}  onClick={onSidebar}> <FilterAltIcon /> Advanced</Button>
      </div>
      </div>
      <Sidebar sidebar={sidebar} onSidebar={onSidebar} onChange={onChange} filters={filters}/>
    </ProductHeroLayout>
    {submit && <SearchResults submit={submit} searchedListings={(filters.apply === true) ? filteredLocations : searchedListings} searchedLoc={searchedLoc} startDate={(dateRange.searchDateStart)?.toDateString()} endDate={(dateRange.searchDateEnd)?.toDateString()}/>}
    </div>
  );
}
