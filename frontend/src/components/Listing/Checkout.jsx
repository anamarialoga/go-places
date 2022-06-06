import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import withRoot from '../../withRoot';
import { toast } from 'react-toastify';
import { AppContext } from '../../context/appContext';
var creditCardType = require("credit-card-type");

const steps = ['Your Details', 'Payment details', 'Review booking'];

function getStepContent(step, user, valuesDetails, handleChangeDetails, valuesPayment, handlePayment, dateRange) {
  switch (step) {
    case 0:
      return <AddressForm user={user} values={valuesDetails} handleChange={handleChangeDetails}/>;
    case 1:
      return <PaymentForm values={valuesPayment} handleChange={handlePayment}/>;
    case 2:
      return <Review dateRange={dateRange} customerDetails={valuesDetails} paymentDetails={valuesPayment}/>;
    default:
      throw new Error('Unknown step');
  }
}


function Checkout(props) {
  const [activeStep, setActiveStep] = React.useState(0);

  const [valuesDetails, setValuesDetails] = React.useState({
    firstName: props.user.firstName,
    lastName: props.user.lastName,
    email: props.user.email,
    phone: props.user.phone ?? "",
    address: props.user.address ?? '',
    city: props.user.city ?? '',
    country: props.user.country ?? '',
    business: false
  });
  const handleChangeDetails = (event) => {
   if(event.target.id !== 'business')
   {
      setValuesDetails({
      ...valuesDetails,
      [event.target.id]: event.target.value
    });}
    else{
      setValuesDetails({
        ...valuesDetails,
        [event.target.id]: event.target.checked
      })
    }
  };


  const {getDatesInRange, contains} = React.useContext(AppContext)

  const searchedRange = getDatesInRange(props.dateRange.searchDateStart, props.dateRange.searchDateEnd)
  const listingBusyDays = props.listing?.ranges.map((date)=> date)
  console.log("Booked dates on this listing", listingBusyDays);

  const [valuesPayment, setValuesPayment] = React.useState({
    cardholder: "",
    cardNumber: "",
    expiresIn: "",
    cvv: "",
  })


  const handlePayment = (e) =>{
    setValuesPayment ({
      ...valuesPayment,
      [e.target.id] : e.target.value 
    })
  }

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if(activeStep === 1){
    if(valuesPayment.cardholder ==="")
    {
      toast.error('You must provide the cardholder name!')
    }else if(valuesPayment.cardNumber.length !== 16)
    {
      toast.error('Card number must have a 16-digit format ');
    }else if(valuesPayment.cvv.length !== 3){
      toast.error('CVV must have a 3-digit format')
    }else if(creditCardType(valuesPayment.cardNumber)[0]?.niceType ==="" || creditCardType(valuesPayment.cardNumber)[0]?.niceType === undefined){
      toast.error("Card number is invalid")
    }}
    else if(activeStep===0){
    if(props.dateRange.searchDateStart === null || props.dateRange.searchDateEnd === null){
      toast.error('Please select the start and end dates for your trip')
    }else if(contains(listingBusyDays, searchedRange)){
      toast.error('The date-range you selected is invalid')
    }
  }

    if( 
        activeStep === 1  && 
        valuesPayment.cardNumber.length===16  &&
        valuesPayment.cvv.length===3 &&
        creditCardType(valuesPayment.cardNumber)[0]?.niceType !== undefined &&
        creditCardType(valuesPayment.cardNumber)[0]?.niceType !=="" 
      )
      {
        setActiveStep(activeStep + 1);
      }
    else if(
      activeStep === 0 &&        
      props.dateRange.searchDateStart !== null &&
      props.dateRange.searchDateEnd !== null &&
      contains(listingBusyDays, searchedRange)===false
      ){
        setActiveStep(activeStep + 1);
      }
    else if(
      activeStep === 2 
    ){
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  return (
    <>
      <Container component="main" maxWidth="sm" style={{paddingTop:"5%", marginLeft:"40%"}}>
        <Paper variant="outlined" sx={{  p: { xs: 2, md: 3 } }} >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for travelling with GoPlaces.
                </Typography>
                <Typography variant="subtitle1">
                  You will receive an e-mail with your booking confirmation. 
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <form onSubmit={handleNext}>
                {getStepContent(activeStep, props.user, valuesDetails, handleChangeDetails, valuesPayment, handlePayment, searchedRange)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    color="secondary"
                    variant="contained"
                    type={'submit'}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Confirm Booking' : 'Next'}
                  </Button>
                </Box>
                </form>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        </Container>
        </>
  );
}
export default withRoot(Checkout);