import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import withRoot from '../../withRoot';

function PaymentForm(props) {

  console.log(props.values)
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardholder"
            label="Name on card"
            value={props.values.cardholder}
            onChange={props.handleChange}
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            value={props.values.cardNumber}
            onChange={props.handleChange}
            autoComplete="cc-number"
            variant="standard"
            maxLength={16}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expiresIn"
            style={{marginTop:"1rem"}}
            fullWidth
            type={'date'}
            value={props.values.expiresIn}
            onChange={props.handleChange}
            autoComplete="cc-exp"
            variant="standard"
            helperText="Expiring date of your credit card"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            value={props.values.cvv}
            onChange={props.handleChange}
            autoComplete="cc-csc"
            variant="standard"
            maxLength={3}
          />
        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default withRoot(PaymentForm);