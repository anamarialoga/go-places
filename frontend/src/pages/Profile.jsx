import { Box, Button, Card, CardHeader, Container, Grid } from '@mui/material';
import Typography from '../components/Typography';
import { LatestOrders } from '../components/Profile/latest-orders';
import { LatestProducts } from '../components/Profile/latest-products';
import { TotalCustomers } from '../components/Profile/total-customers';
import { TotalProfit } from '../components/Profile/total-profit';
import AppAppBar from '../views/AppAppBar';
import withRoot from '../withRoot';
import { AccountProfile } from '../components/Profile/account-profile';
import { AccountProfileDetails } from '../components/Profile/account-profile-details';
import { Budget } from '../components/Profile/budget';


const Profile = () => (
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
        <Typography
          sx={{ mb: 3, fontWeight:'600', fontFamily: 'inherit' }}
          variant="h5"
        >
         My Account
        </Typography>
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
            <AccountProfile />
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
            <AccountProfileDetails />
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
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
          </Grid>
          <div className='flex' style={{width: '100%'}}>
            <Grid
                item
                lg={4}
                md={6}
                xl={6}
                xs={12}
                mr={"2rem"}
                ml={"2rem"}
            >
                <LatestProducts />
            </Grid>
            <Grid
                item
                lg={8}
                md={12}
                xl={6}
                xs={12}
            >
                <LatestOrders />
            </Grid>
            </div>
            <div className='flex' style={{width: "100%", marginTop: "2rem"}}>
            <Grid
            item
            ml={"2rem"}
            width={"50%"}
          >
            <TotalCustomers />
          </Grid>
          <p style={{margin: '1rem'}}></p>
          <Grid
            item
            width={"50%"}
          >
            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <p style={{margin: '1rem'}}></p>
          <Grid
            item
            width={"50%"}
          >
            <Budget sx={{ height: '100%' }} />
          </Grid>
            </div>
            </Grid>
      </Container>
    </Box>
  </>
);

export default withRoot(Profile);