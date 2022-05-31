import { Box, Button, Card, CardHeader, Container, Grid } from '@mui/material';
import Typography from '../components/Typography';
import { MyBookings } from '../components/Profile/MyBookings';
import { MyListings } from '../components/Profile/MyListings';
import {UpcomingTrips} from '../components/Profile/UpcomingTrips'
import { TotalCustomers } from '../components/Profile/total-customers';
import { TotalProfit } from '../components/Profile/total-profit';
import AppAppBar from '../views/AppAppBar';
import withRoot from '../withRoot';
import { ProfileName } from '../components/Profile/ProfileName';
import { ProfileDetails } from '../components/Profile/ProfileDetails';
import { Budget } from '../components/Profile/budget';
import { AppContext } from '../context/appContext';
import React, { useContext, useEffect, useState } from 'react';
import {Loading} from '../components/Loading'

const Profile = () => {

const {user, fetchMyListings, myListings} = useContext(AppContext);
const [loading, setLoading]=useState(true);

useEffect(()=>{
    fetchMyListings();
    setLoading(false);
},[fetchMyListings]);




 return loading? <Loading/> : (
    <>
    <AppAppBar/>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
    <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
      }}
    >
      <Container maxWidth="100%" style={{marginLeft: '1rem', marginBottom: "3rem"}} >
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={15}
          >
            <ProfileName user={user} />
            <br/>
            <Card>
                <CardHeader subheader="You can add a property listing"/>
                <div style={{textAlign: "center"}}>
                    <Button variant="contained" color="secondary" sx={{mb: "0.7rem", width: "97%"}}>Add listing</Button>
                </div>
            </Card>
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <ProfileDetails user={user} />
          </Grid>
        </Grid>
      </Container>
    </Box>
    </>
    <Container maxWidth={false}>
        <Grid
            container
            spacing={3}
        >
            <div style={{width: '100%'}} className={window.innerWidth <= 850 ? "block" : "flex"}>
                <Grid
                    item
                    lg={4}
                    md={6}
                    xl={6}
                    xs={12}
                    ml={"2rem"}
                >
                    <MyListings listings={myListings} style={{marginBottom: '1rem'}}/>
                </Grid>
                <Grid
                    item
                    lg={4}
                    md={6}
                    xl={6}
                    xs={12}
                >
                    <MyBookings style={{marginBottom: '1rem', marginLeft: "2rem"}}/>
                </Grid>
                <Grid
                    item
                    lg={4}
                    md={6}
                    xl={6}
                    xs={12}
                >
                    <UpcomingTrips listings={myListings} style={{marginBottom: '1rem', marginLeft: '2rem'}} />
                </Grid>
            </div>
            <div  style={{width: "100%", marginTop: "2rem"}} className={window.innerWidth <= 850 ? "block" : "flex"}>
                <Grid
                item
                ml={'2rem'}
                width={"50%"}
                >
                <TotalCustomers />
                </Grid>
                <p style={{marginLeft: '1rem'}}></p>
                <Grid
                item
                ml={'2rem'}
                width={"50%"}
                >
                <TotalProfit sx={{ height: '100%' }} />
                </Grid>
                <p style={{marginLeft: '1rem'}}></p>
                <Grid
                item
                ml={'2rem'}
                width={"50%"}
                >
                <Budget sx={{ height: '100%' }} />
                </Grid>
            </div>
        </Grid>
    </Container>
    </Box>
  </>
)};

export default withRoot(Profile);