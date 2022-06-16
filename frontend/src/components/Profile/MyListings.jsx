/* eslint-disable no-sequences */
import {
  Box,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText, 
  ListItemButton,
  CardActionArea,
} from '@mui/material';
import { useContext, useState } from 'react';
import {ReactComponent as Delete} from '../../common/svg/deleteIcon.svg'
import {ReactComponent as Edit} from '../../common/svg/editIcon.svg'
import { AppContext } from '../../context/appContext';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import ReadMore from '../ReadMore';

export const MyListings = (props) => {
  const navigate = useNavigate();
  const {onEditListing, onDeleteListing} = useContext(AppContext);

  //PAGINATION
  const [pageNumber, setPageNumber] = useState(0);
  const listingsPerPage=3;
  const pageCount = Math.ceil(props.listings.length / listingsPerPage);
  const changePage = ({ selected }) => {
      setPageNumber(selected);
  };

  const [open, setOpen] = useState(false);
  const handleClose = (e) => {e.preventDefault(); e.stopPropagation(); setOpen(false);}

 return (
   <div style={{width: "75%",marginLeft: "20%"}}>
    <Card {...props}>
    <CardHeader
    style={{color:"#ff3366"}}
      subheader={`${props.listings.length} properties in total`}
      title="My listings"
    />
    <Divider />
    <List >
      {props.listings.slice(pageNumber * listingsPerPage , pageNumber * listingsPerPage + listingsPerPage).map((listing, i) => (
        <CardActionArea onClick={()=>navigate(`/listings/${listing._id}`)}  key={i}>
        <ListItem
          divider={i < 2}
        >
          <ListItemAvatar style={{cursor:  "pointer"}}>
            <img
              alt={listing.name}
              src={`http://127.0.0.1:8888/${listing.images[0]}`}
              style={{
                borderRadius: '1rem',
                height: 190,
                width: 300
              }}
            />
          </ListItemAvatar>
          <div style={{display: "flex",justifyContent: 'space-between', width: "100%", height:"9rem"}}>
            <div className='block' style={{width:"70%"}}>
              <ListItemText
                style={{marginLeft: "2rem"}}
                primary={listing.name}
                secondary={
                      listing.description? listing.description.slice(0,200)+' ...' : ""}
              />
              {listing.description && <ListItemButton style={{marginLeft: "1rem", fontWeight: 600, fontSize: "0.9rem", color: "#ff3366", marginTop:"-0.5rem", width:"8rem"}}  variant={"text"} onClick={(e)=>{e.preventDefault(); e.stopPropagation(); setOpen(true)}}>
                  [Read More]
              </ListItemButton>}
              {open && <ReadMore listing={listing} open={open} handleClose={handleClose}/>}
              <ListItemText
                style={{marginLeft: "2rem"}}
                primary={'Location'}
                secondary={listing.location}
              />
            </div>
            <div className='block' style={{ display: "block", marginTop: "2rem", marginRight: "2rem"}}>
              <div>
                <Edit fill={"#ff3366"} onClick={()=>onEditListing(listing._id)} style={{cursor: "pointer"}}/>
              </div>
              <div>
                <Delete fill={"#ff3366"}  onClick={()=>onDeleteListing(listing._id, listing.name)} style={{cursor: "pointer"}}/>
              </div>
            </div>
          </div>
        </ListItem>
        </CardActionArea>
      ))}
    </List>
    <Divider/>
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
