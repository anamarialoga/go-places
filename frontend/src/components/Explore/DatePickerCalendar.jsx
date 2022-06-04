import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import withRoot from '../../withRoot';

 function DatePickerCalendar(props) {
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className='flex' >
         <DatePicker
          label={"From:"}
          value={props.searchDateStart}
          onChange={props.setSearchDateStart}
          renderInput={(params) => <TextField {...params} />}
        />
      <p style={{marginRight: '1rem'}}></p>
      <DatePicker
          label={"To:"}
          value={props.searchDateEnd}
          onChange={props.setSearchDateEnd}
          renderInput={(params) => <TextField {...params} />}
          minDate={props.searchStart}
        />
      </div>
    </LocalizationProvider>
  );
}


export default withRoot(DatePickerCalendar);