import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import withRoot from '../../withRoot';
import { AppContext } from '../../context/appContext';

 function DatePickerCalendar() {

  const {searchDateStart, searchDateEnd, onChangeStart, onChangeEnd} = React.useContext(AppContext)
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className='flex' >
         <DatePicker
          label={"From:"}
          value={searchDateStart}
          onChange={onChangeStart}
          renderInput={(params) => <TextField {...params} />}
        />
      <p style={{marginRight: '1rem'}}></p>
      <DatePicker
          label={"To:"}
          value={searchDateEnd}
          onChange={onChangeEnd}
          renderInput={(params) => <TextField {...params} />}
          minDate={searchDateStart}
        />
      </div>
    </LocalizationProvider>
  );
}


export default withRoot(DatePickerCalendar);