import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
import DatePickerCalendar from '../components/Explore/DatePickerCalendar';
import TextField from '@mui/material/TextField';
import Typography from '../components/Typography.js';
import ProductHeroLayout from './ProductHeroLayout';
import { Button } from '@mui/material';
import Sidebar from '../components/Explore/Sidebar';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const backgroundImage =
  'http://127.0.0.1:8888/daniela-cuevas-t7YycgAoVSw-unsplash.jpg';


export default function AppMainExplore() {

  const [sidebar, setSideBar] = React.useState(false);
  const onSidebar=()=>{
    setSideBar(!sidebar);
  }

  return (
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
      <DatePickerCalendar/>
      <br/>
      <div className='passwordInputDiv'>
      <TextField   
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label={"Search locations"} 
          sx={{backgroundColor: "white"}}
      />
      <SearchIcon style={{zIndex:'9', position:'absolute', right:"2%", top:"40%"}} color={"secondary"}/>
      </div>
      <div  style={{ textAlign: 'center', marginTop:"2rem"}}>
        <Button fullWidth variant='contained' color={"secondary"} style={{fontSize: "1.1rem"}}>Search</Button>
      </div>
      <div style={{ textAlign: 'center', marginTop: '0.5rem', borderRadius:'0.2rem', backgroundColor:"#ffffff"}}>
        <Button fullWidth variant={'text'}color={"secondary"}  onClick={onSidebar}> <FilterAltIcon /> Advanced</Button>
      </div>
      </div>
      <Sidebar sidebar={sidebar} onSidebar={onSidebar}/>
    </ProductHeroLayout>
  );
}
