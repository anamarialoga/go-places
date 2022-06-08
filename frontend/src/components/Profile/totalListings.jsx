import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export const ListingsCard= (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            LISTINGS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {props.listings?.length}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'secondary.light',
              height: 56,
              width: 56
            }}
          >
            <MapsHomeWorkIcon style={{color:"#ff3366"}} />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {(props.listings?.length < 2) &&
        <>
        <ArrowDownwardIcon  style={{marginRight:"0.5rem"}} color="error" />
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Fresh Starter
        </Typography>
        </>}
        {(props.listings?.length >= 2 && props.listings?.length<=5) &&
        <>
        <ArrowForwardIcon  style={{marginRight:"0.5rem"}} color="error" />
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Enjoying the journey
        </Typography>
        </>}
        {(props.listings?.length >5) &&
        <>
        <ArrowUpwardIcon  style={{marginRight:"0.5rem"}} color="error" />
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Real Estate King
        </Typography>
        </>}
        {
           (!props.listings) &&
           <>
           <BeachAccessIcon style={{marginRight:"0.5rem"}}color="error" />
           <Typography
             color="textSecondary"
             variant="caption"
           >
             Here for the vacation
           </Typography> 
           </>
        }
      </Box>
    </CardContent>
  </Card>
);
