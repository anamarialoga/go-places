import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';

export const ProfileName = (props) => {
  return (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={props.user?.avatar ?? ""}
          sx={{
            height: 64,
            mb: 2,
            width: 64
          }}
        />
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {props.user?.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
        Landlord on GoPlaces since {props.user?.since ?? "dd/mm/yyyy"}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions style={{backgroundColor: "#fff5f8"}}>
      <Button
        color="secondary"
        style={{width: "100%"}}
        variant="contained"
      >
        Upload picture
      </Button>
    </CardActions>
  </Card>
)};
