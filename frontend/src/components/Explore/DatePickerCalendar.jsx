import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import withRoot from '../../withRoot';

 function DatePickerCalendar() {
  const [startDate, setStartDate] = React.useState(null)
  const [endDate, setEndDate] = React.useState(null)
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className='flex' >
        <DatePicker
          label={"From:"}
          value={startDate}
          onChange={(newValue) => {
            setStartDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <p style={{marginRight: '1rem'}}></p>
        <DatePicker
        label={"To:"}
          value={endDate}
          onChange={(newValue) => {
            setEndDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
    </LocalizationProvider>
  );
}


export default withRoot(DatePickerCalendar);