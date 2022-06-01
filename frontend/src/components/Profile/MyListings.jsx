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
} from '@mui/material';
import { useContext, useState } from 'react';
import {ReactComponent as Delete} from '../../common/svg/deleteIcon.svg'
import {ReactComponent as Edit} from '../../common/svg/editIcon.svg'
import { AppContext } from '../../context/appContext';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';

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

 return (
   <div style={{width: "75%",marginLeft: "20%"}}>
 <Card {...props}>
    <CardHeader
      subheader={`${props.listings.length} properties in total`}
      title="My listings"
    />
    <Divider />
    <List >
      {props.listings.slice(pageNumber * listingsPerPage , pageNumber * listingsPerPage + listingsPerPage).map((listing, i) => (
        <ListItem
          divider={i < props.listings.length - 1}
          key={i}
        >
          <ListItemAvatar style={{cursor:  "pointer"}} onClick={()=>navigate(`/listings/${listing._id}`)}>
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
            <div className='block' style={{width:"70%"}}>
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
