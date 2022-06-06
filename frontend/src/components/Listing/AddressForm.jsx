import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import withRoot from '../../withRoot';

function AddressForm(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom style={{marginBottom:"1rem"}}>
      Billing Address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required={true}
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            onChange={props.handleChange}
            value={props.values.firstName}
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            value={props.values.lastName}
            onChange={props.handleChange}
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type={"email"}
            required
            id="email"
            name="email"
            label="E-mail"
            disabled
            value={props.values.email}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address line"
            fullWidth
            value={props.values.address}
            onChange={props.handleChange}
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required={true}
            id="city"
            name="city"
            label="City"
            fullWidth
            value={props.values.city}
            onChange={props.handleChange}
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            value={props.values.country}
            onChange={props.handleChange}
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value={props.values.business} onChange={props.handleChange} color="secondary" id="business"  />}
            label="Travelling for business?"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default withRoot(AddressForm);