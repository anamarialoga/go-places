import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import withRoot from '../../withRoot';

function PaymentForm(props) {
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
        <Grid item xs={12} md={6} style={{display:'flex'}}>
          <TextField
            required
            placeholder='xxxx-xxxx-xxxx-xxxx'
            id="cardNumber"
            label="Card number"
            fullWidth
            value={props.values.cardNumber}
            onChange={props.handleChange}
            autoComplete="cc-number"
            variant="standard"
            maxLength={19}
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