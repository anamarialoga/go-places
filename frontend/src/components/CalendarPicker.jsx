import { FormLabel } from "@material-ui/core";
import React, { useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const CalendarPicker = () => {
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [labelInvisible, setLabelInvisible] = useState(false);

  const MyContainer = ({ children }) => {
    return (
        <CalendarContainer className={"calendar"}>
          <div className={window.innerWidth >= 645? "calendarChildren flex": "calendarChildren block"}>{children}</div>
        </CalendarContainer>
    );
  };


  return (
    <>
    <div style={{position:'relative', zIndex: '1',  backgroundColor:"#080808c5", borderBottom: '1px solid #0f0f0f', width:'30%'}}>
      <FormLabel variant="outlined" className={ "MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined"}>{labelInvisible?"" : "Search by dates"}</FormLabel>
      <DatePicker   
         className="MuiInputBase-input MuiOutlinedInput-input" 
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => {
            setDateRange(update);
          }}
          onCalendarOpen={()=>setLabelInvisible(true)}
          onCalendarClose={()=>setLabelInvisible(false)}
          isClearable={true}
          calendarContainer={MyContainer} 
          dateFormat="dd/MM/yyyy"
          monthsShown={2}
          />
      </div>
    </>
  );
}