import { useState } from 'react';
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

export const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    name: "Katrina Smith",
    email: 'demo@devias.io',
    phone: '',
    password: '••••••'
  });

  const [editDetails, setEditDetails] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

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
                fullWidth
                helperText="Please specify your name"
                label="Name"
                name="name"
                onChange={handleChange}
                required
                disabled={ editDetails? false: true}
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
                onChange={handleChange}
                type="number"
                disabled={ editDetails? false: true}
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
                label="Password"
                name="password"
                onChange={handleChange}
                required
                disabled={ editDetails? false: true}
                value={editDetails? "" : values.password}
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
            onClick= {()=>setEditDetails(!editDetails)}
          >
           { editDetails? 'Save Details': 'Edit details'}
          </Button>
        </Box>
      </Card>
    </form>
  );
};
