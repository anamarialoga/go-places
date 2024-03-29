import { useState, useContext } from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import { AppContext } from '../../context/appContext';
export const ProfileDetails = (props) => {

  const [values, setValues] = useState({
    firstName: props.user.firstName,
    lastName: props.user.lastName,
    email: props.user.email,
    phone: props.user.phone ?? "",
    password: '',
    address: props.user.address ?? '',
    city: props.user.city ?? '',
    country: props.user.country ?? ''
  });


  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const {  onSubmitChangeDetails, changeDetails} = useContext(AppContext);

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card >
        <CardHeader
          style={{backgroundColor: "#fff5f8", color:"#ff3366"}}
          subheader="The information can be edited"
          title="Personal Details"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                style={{background: 'white'}}
                fullWidth
                label="First Name"
                helperText="Please fill your first name"
                name="firstName"
                onChange={handleChange}
                required
                disabled={ changeDetails? false: true}
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                style={{background: 'white'}}
                fullWidth
                label="Last Name"
                helperText="Please fill your last name"
                name="lastName"
                onChange={handleChange}
                required
                disabled={ changeDetails? false: true}
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                style={{background: 'white'}}
                fullWidth
                label="Email Address"
                helperText="Please fill your email"
                name="email"
                onChange={handleChange}
                disabled
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
               style={{background: 'white'}}
                fullWidth
                label="Phone Number"
                name="phone"
                helperText="Please fill your phone number"
                onChange={handleChange}
                disabled={ changeDetails? false: true}
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                style={{background: 'white'}}
                fullWidth
                type="password"
                label={changeDetails? 'Password' : '••••••'}
                name="password"
                helperText="Please fill your password"
                onChange={handleChange}
                disabled={ changeDetails? false: true}
                value={values.password}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                style={{background: 'white'}}
                fullWidth
                label={"Address Line"}
                name="address"
                helperText="Please fill your address"
                onChange={handleChange}
                disabled={ changeDetails? false: true}
                value={values.address}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                style={{background: 'white'}}
                fullWidth
                label={"City"}
                name="city"
                helperText="Please fill your city"
                onChange={handleChange}
                disabled={ changeDetails? false: true}
                value={values.city}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                style={{background: 'white'}}
                fullWidth
                label={"Country"}
                name="country"
                helperText="Please fill your country"
                onChange={handleChange}
                disabled={ changeDetails? false: true}
                value={values.country}
                variant="outlined"
              />
            </Grid>
        </Grid>
        </CardContent>
        <Divider />
        <Box
         style={{backgroundColor: "#fff5f8"}}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="secondary"
            variant="contained"
            onClick= {()=>onSubmitChangeDetails(values)}
          >
           { changeDetails? 'Save Details': 'Edit details'}
          </Button>
        </Box>
      </Card>
    </form>
  );
};
