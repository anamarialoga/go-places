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


export const ProfileName = (props) => (
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
    <CardActions>
      <Button
        color="primary"
        style={{width: "100%", marginBottom:'1.3rem'}}
        variant="contained"
      >
        Upload picture
      </Button>
    </CardActions>
  </Card>
);
