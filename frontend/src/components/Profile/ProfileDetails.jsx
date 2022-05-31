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
    name: props.user.name,
    email: props.user.email,
    phone: props.user.phone ?? "",
    password: ''
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
      <Card style={{marginRight: '1rem'}}>
        <CardHeader
          subheader="The information can be edited"
          title="Personal Details"
        />
        <Divider />
        <CardContent style={{background: 'none'}}>
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
                label="Name"
                helperText="Please fill your name"
                name="name"
                onChange={handleChange}
                required
                disabled={ changeDetails? false: true}
                value={values.name}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
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
        </Grid>
        </CardContent>
        <Divider />
        <Box
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
