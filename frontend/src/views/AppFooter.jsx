import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography.js';
import TextField from '../components/TextField';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import withRoot from '../withRoot.js';
function Copyright() {
  return (
    <React.Fragment >
      <div style={{marginRight:'2rem', width: '100%'}}>
      {'Copyright ©'}
      <Link color="inherit"  href="https://localhost:3000/">
        GoPlaces
      </Link>{' '}
      {new Date().getFullYear()}
      </div>
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: "#e3dbc7",
  mr: 1,
  '&:hover': {
    bgcolor: 'warning.dark',
  },
};

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'ro-RO',
    name: 'Română',
  },
];

function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5} >
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: 'block', marginLeft:'2rem' }}>
                  <Box component="a" href="https://mui.com/" sx={iconStyle}>
                    <FacebookIcon/>
                  </Box>
                  <br/>
                  <Box component="a" href="https://twitter.com/MUI_hq" sx={iconStyle}>
                    <TwitterIcon/>
                  </Box>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/terms/">Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/privacy/">Privacy</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{ mt: 1, width: 150 }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <div className='block' style={{width: "100%"}}>
          <Grid item>
              <Typography
            variant="subtitle1"
            align="left"
            color="text.secondary"
            component="p"
          >
            Consult the GoPlaces terms and conditions regarding the processing and manipulation of data.
          </Typography>
          <br/>
          <Copyright />
          </Grid>
        </div>
      </Container>
    </Typography>
  );
}

export default withRoot(AppFooter)