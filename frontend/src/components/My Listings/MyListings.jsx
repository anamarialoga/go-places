/* eslint-disable no-sequences */
import {
  Box,
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
import MoreVertIcon from '@mui/icons-material/MoreVert'; 
import { useContext, useEffect, useState } from 'react';
import {ReactComponent as Delete} from '../../common/svg/deleteIcon.svg'
import {ReactComponent as Edit} from '../../common/svg/editIcon.svg'
import { AppContext } from '../../context/appContext';
import ReactPaginate from 'react-paginate';

export const MyListings = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () =>{
    setAnchorEl(null);
  }
  const {onEditListing, onDeleteListing} = useContext(AppContext);


    //PAGINATION
    const [pageNumber, setPageNumber] = useState(0);
    const [listingsPerPage, setListingsPerPage] = useState(3);
    const pageCount = Math.ceil(props.listings.length / listingsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    useEffect(()=>{
        if(window.innerWidth>=1725)
            setListingsPerPage(3);
        else if(window.innerWidth >= 1488 && window.innerWidth < 1725)
            setListingsPerPage(3);
        else setListingsPerPage(4);
    }, []);

 return (
   <div style={{width: "75%",marginLeft: "20%"}}>
 <Card {...props}>
    <CardHeader
      subheader={`${props.listings.length} properties in total`}
      title="My listings"
    />
    <Divider />
    <List >
      {Array.from(props.listings).slice(pageNumber * listingsPerPage, pageNumber * listingsPerPage + listingsPerPage).map((listing, i) => (
        <ListItem
          divider={i < props.listings.length - 1}
          key={listing._id}
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
          <div style={{display: "flex",justifyContent: 'space-between', width: "100%", height:"9rem"}}>
            <div className='block'>
              <ListItemText
                style={{marginLeft: "2rem"}}
                primary={listing.name}
                secondary={
                      listing.description? listing.description.slice(0,120)+' ...' : ""}
              />
              {listing.description && <ListItemButton style={{marginLeft: "1rem", fontWeight: 600, fontSize: "0.9rem", color: "#ff3366", marginTop: '-1rem'}}  variant={"text"}>
                  [Read More]
              </ListItemButton>}
              <ListItemText
                style={{marginLeft: "2rem"}}
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
            style={{marginTop:'-3rem'}}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: 48 * 4.5,
              },
            }}
      >
          <MenuItem key={'edit'}  onClick={()=>(onEditListing(listing._id), handleClose())}>
            Edit <Edit fill={"#ff3366"} style={{marginLeft:"1.8rem"}}/>
          </MenuItem>
          <MenuItem key={'edit'}  onClick={()=>(onDeleteListing(listing._id), handleClose())}>
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
        justifyContent: 'center',
        p: 2
      }}
    >
    <ReactPaginate
        previousLabel={'<'}
        nextLabel={props.listings.length > 0 ? ">" : ""}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
    />
    </Box>
  </Card>
  </div>
)};
