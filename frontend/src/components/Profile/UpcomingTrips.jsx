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
    MenuItem,
    Menu,
  } from '@mui/material';
  import ArrowRightIcon from '@mui/icons-material/ArrowRight';
  import MoreVertIcon from '@mui/icons-material/MoreVert'; 
  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import {ReactComponent as Delete} from '../../common/svg/deleteIcon.svg'
  import {ReactComponent as Edit} from '../../common/svg/editIcon.svg'
  import MailOutlineIcon from '@mui/icons-material/MailOutline';
  
  export const UpcomingTrips = (props) => {
  
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleSelectEdit = () => {
      navigate('/editlisting')
    };
  
    const handleSelectDelete = () => {
      
    };
  
    const handleClose = () =>{
      setAnchorEl(null);
    }
  
  
   return (
   <Card {...props}>
      <CardHeader
        style={{color:"#ff3366"}}
        // subheader={`${props.listings.length} properties in total`}
        title="Upcoming Trips"
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
                  height: 190,
                  width: 250
                }}
              />
            </ListItemAvatar>
            <div style={{display: "flex",justifyContent: 'space-between', width: "100%", height:"13rem"}}>
              <div className='block'>
                <p style={{marginLeft: "1rem", fontWeight: "600"}}>Landlord name  <MailOutlineIcon style={{paddingTop: "0.6rem"}}/></p>
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
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              style={{marginTop:'-5rem'}}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: 48 * 4.5,
                  width: '7rem',
                },
              }}
        >
            <MenuItem key={'edit'}  onClick={handleSelectEdit}>
              Edit <Edit fill={"#ff3366"} style={{marginLeft:"1.8rem"}}/>
            </MenuItem>
            <MenuItem key={'edit'}  onClick={handleSelectDelete}>
              Delete <Delete fill={"#ff3366"} style={{marginLeft:"0.6rem"}}/>
            </MenuItem>
        </Menu>
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
  
  