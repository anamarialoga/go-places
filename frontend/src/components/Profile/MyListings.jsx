import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText, 
  ListItemButton,
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert'; 

export const MyListings = (props) => {

 return (
 <Card {...props}>
    <CardHeader
      subtitle={`${props.listings.length} in total`}
      title="My listings"
    />
    <Divider />
    <List >
      {props.listings.slice(0).reverse().map((listing, i) => (
        (i<2) &&
        <ListItem
          divider={i < props.listings.length - 1}
          key={listing.id}
        >
          <ListItemAvatar>
            <img
              alt={listing.name}
              src={`http://127.0.0.1:8888/${listing.images[0]}`}
              style={{
                borderRadius: '1rem',
                height: 168,
                width: 190
              }}
            />
          </ListItemAvatar>
          <div style={{display: "flex",justifyContent: 'space-between', width: "100%"}}>
            <div className='block'>
              <ListItemText
                style={{marginLeft: "1rem"}}
                primary={listing.name}
                secondary={
                      listing.description? listing.description.slice(0,55)+' ...' : ""}
              />
              {listing.description && <ListItemButton style={{fontWeight: 600, fontSize: "0.9rem", color: "#ff3366", marginTop: '-1rem'}}  variant={"text"}>
                  [Read More]
              </ListItemButton>}
              <ListItemText
                style={{marginLeft: "1rem"}}
                primary={'Location'}
                secondary={listing.location}
              />
            </div>
          <IconButton
            edge="end"
            size="small"
          >
            <MoreVertIcon />
          </IconButton>
          </div>
        </ListItem>
      ))}
    </List>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
)};
