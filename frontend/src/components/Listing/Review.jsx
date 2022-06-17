import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import withRoot from '../../withRoot';
import { ListingContext } from '../../context/listingContext';
import { useParams } from 'react-router-dom';
var creditCardType = require("credit-card-type");


function Review(props) {
  
  const {listingid} = useParams();
  const {fetchListing, listing }= React.useContext(ListingContext);

  React.useEffect(()=>{
      fetchListing(listingid);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const payments = [
  { name: 'Card type', detail: creditCardType(props.paymentDetails.cardNumber)[0].niceType },
  { name: 'Card holder', detail: props.paymentDetails.cardholder },
  { name: 'Card number', detail: `xxxx-xxxx-xxxx-${props.paymentDetails.cardNumber.slice(-4)}` },
  { name: 'Expiry date', detail: props.paymentDetails.expiresIn },
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        summary
      </Typography>
      <List disablePadding>
          <ListItem  sx={{ py: 1, px: 0 }}>
            <ListItemText primary={listing.name} secondary={listing.description.slice(0,50)+'...'} />
            <Typography variant="body2">${(listing.price).toFixed(2)} /night</Typography>
          </ListItem>
          <ListItem  sx={{ py: 1, px: 0 }}>
            <ListItemText primary={"Period"} secondary={`${props.dateRange[0]} - ${props.dateRange[props.dateRange.length-1]}`} />
            <Typography variant="body2">{props.dateRange.length - 1} nights</Typography>
          </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${(listing.price * (props.dateRange.length - 1)).toFixed(2)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            customer details
          </Typography>
          <Typography gutterBottom>{props.customerDetails.firstName} {props.customerDetails.lastName}</Typography>
          <Typography gutterBottom>{props.customerDetails.address},{props.customerDetails.city},{props.customerDetails.country}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default withRoot(Review);