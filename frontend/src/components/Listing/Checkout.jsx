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

const steps = ['Your Details', 'Payment details', 'Review booking'];

function getStepContent(step, user, valuesDetails, handleChangeDetails, valuesPayment, handlePayment) {
  switch (step) {
    case 0:
      return <AddressForm user={user} values={valuesDetails} handleChange={handleChangeDetails}/>;
    case 1:
      return <PaymentForm values={valuesPayment} handleChange={handlePayment}/>;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}


function Checkout(props) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

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


  const [valuesPayment, setValuesPayment] = React.useState({
    cardholder: "",
    cardNumber: "",
    expiresIn: "",
    cvv: ""
  })
  const handlePayment = (e) =>{
    setValuesPayment ({
      ...valuesPayment,
      [e.target.id] : e.target.value
    })
  }

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
                {getStepContent(activeStep, props.user, valuesDetails, handleChangeDetails, valuesPayment, handlePayment)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        </Container>
        </>
  );
}
export default withRoot(Checkout);