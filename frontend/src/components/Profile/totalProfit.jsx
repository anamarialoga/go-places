import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const TotalProfit = (props) => (
  <Card {...props}>
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
            TOTAL PROFIT
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            ${props.profit < 1000 ? props.profit : (props.profit/1000 + "k")}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: '#991939',
              height: 56,
              width: 56
            }}
          >
            <AttachMoneyIcon />
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
        {(props.profit  < 2000) &&
        <>
        <ArrowDownwardIcon  style={{marginRight:"0.5rem"}} color="error" />
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Fresh Starter
        </Typography>
        </>}
        {(props.profit >= 2000 && props.profit<=5000) &&
        <>
        <ArrowForwardIcon  style={{marginRight:"0.5rem"}} color="error" />
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Enjoying the journey
        </Typography>
        </>}
        {(props.profit >5000) &&
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
           (!props.profit) &&
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
