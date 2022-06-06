import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import withRoot from '../../withRoot';
import { AppContext } from '../../context/appContext';
import { useParams } from 'react-router-dom';
import { ListingContext } from '../../context/listingContext';

 function DatePickerCalendar() {

  const {searchDateStart, searchDateEnd, onChangeStart, onChangeEnd} = React.useContext(AppContext)
  const {listingid} = useParams();
  const {fetchListing, listing }= React.useContext(ListingContext);

  React.useEffect(()=>{
      fetchListing(listingid);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  function disableDays(date) {
    if(window.location.href===`http://localhost:3000/listings/${listingid}/rent`)
      return listing.ranges?.includes(date.toDateString())
  }
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className='flex' >
         <DatePicker
          label={"From:"}
          value={searchDateStart}
          onChange={onChangeStart}
          renderInput={(params) => <TextField {...params} />}
          disablePast
          shouldDisableDate={disableDays}
        />
      <p style={{marginRight: '1rem'}}></p>
      <DatePicker
          label={"To:"}
          value={searchDateEnd}
          onChange={onChangeEnd}
          renderInput={(params) => <TextField {...params} />}
          minDate={searchDateStart}
          shouldDisableDate={disableDays}
        />
      </div>
    </LocalizationProvider>
  );
}


export default withRoot(DatePickerCalendar);