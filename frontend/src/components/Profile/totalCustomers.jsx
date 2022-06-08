import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';

export const Budget = (props) => (
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
            CUSTOMERS
          </Typography>
          <div style={{display:"flex", paddingTop:"0.5rem"}}>
          <Typography
            color="textPrimary"
            variant="h4"
            style={{fontSize:"1.5rem",marginRight:"0.5rem"}}
          >
            {props.percentage}% 
          </Typography>
          <Typography variant={"subtitle1"}>
           are from {props.mostCountry}
          </Typography>
          </div>
          <div style={{display:"flex", paddingTop:"0.5rem"}}>
          <Typography
            color="textPrimary"
            variant="h4"
            style={{fontSize:"1.5rem", marginRight:"0.5rem"}}
          >
            {props.percentage2}%  
          </Typography>
          <Typography variant={"subtitle1"}>
           are travelling for business
          </Typography>
          </div>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <PeopleIcon style={{fill:"#ff3366"}} />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
