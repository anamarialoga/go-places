import { Box,  Container, Grid } from '@mui/material';
import withRoot from '../withRoot';
import { ProfileName } from '../components/Profile/ProfileName';
import { ProfileDetails } from '../components/Profile/ProfileDetails';
import { AppContext } from '../context/appContext';
import React, { useContext } from 'react';
import SidebarProfile from '../components/Profile/SidebarProfile';
import { Loading } from '../components/Loading';



const Profile = () => {
const {user, loadingUser} = useContext(AppContext);


 return loadingUser? <Loading/> : (
    <>
    <SidebarProfile/>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 6,
        background: "url(http://127.0.0.1:8888/eberhard-grossgasteiger-S-2Ukb_VqpA-unsplash.jpg)  no-repeat"
      }}
    >
      <Container  style={{marginLeft: '25%', marginTop: "0%", display: 'block'}} >
          <Grid
            item
            lg={8}
            md={6}
            xs={15}
          >
            <ProfileName user={user} />
            <br/>
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={15}
          >
            <ProfileDetails user={user} />
          </Grid>
      </Container>
    </Box>
</>
)};

export default withRoot(Profile);