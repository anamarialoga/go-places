import PerfectScrollbar from 'react-perfect-scrollbar';
import {Button, Divider, List} from '@mui/material';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@mui/material';
import { SeverityPill } from './severity-pill';
import LocalAirportOutlinedIcon from '@mui/icons-material/LocalAirportOutlined';
import Typography from '../Typography';
import { useContext } from 'react';
import { AppContext } from '../../context/appContext';



export const Bookings = (props) => {

  const {onCancelBooking} = useContext(AppContext)

return (
  <Card {...props}>
    <Box sx={{p:3, display:"inline-flex"}}>
    <LocalAirportOutlinedIcon style={{paddingTop:"0.2rem"}}/>
      <Typography variant='h5' color="#ff3366" style={{marginLeft:"0.5rem",fontWeight:800}}>
        My Upcoming Trips
      </Typography>
    </Box>
    <Divider/>
    <PerfectScrollbar>
      <List style={{maxHeight:"25vh", overflow:"auto"}}>
      <Box sx={{  paddingLeft:"4rem", paddingRight:"3rem"}}>
        <Table>
          <TableHead>
            <TableRow >
              <TableCell style={{fontWeight:800, color:"#ff3366", fontSize:"1rem"}}>
                Booking Nr
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                  style={{fontWeight:800, color:"#ff3366", fontSize:"1rem"}}
                >
                  <TableSortLabel
                    active
                    direction="desc"
                    style={{fontWeight:800, color:"#ff3366", fontSize:"1rem"}}
                  >
                     Date Start
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell sortDirection="desc" >
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                  style={{fontWeight:800, color:"#ff3366", fontSize:"1rem"}}
                >
                  <TableSortLabel
                    active
                    direction="desc"
                    style={{fontWeight:800, color:"#ff3366", fontSize:"1rem"}}
                  >
                    Date End
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell style={{fontWeight:800, color:"#ff3366", fontSize:"1rem"}}>
                Status
              </TableCell>
              <TableCell style={{color:"#ffffff"}}>
                Cancel
              </TableCell>
              <TableCell style={{color:"#ffffff"}}>
                Cancel
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {props.bookings?.map((booking) => (
              <TableRow
                hover
                key={booking?._id}
              >
                <TableCell style={{fontWeight:800}}>
                  ID{(booking?._id).slice(0,7)}
                </TableCell>
                <TableCell>
                  {booking?.dateRange[0]}
                </TableCell>
                <TableCell>
                  {booking?.dateRange[booking?.dateRange.length-1]}
                </TableCell>
                <TableCell>
                  <SeverityPill
                    color={(booking?.status === 'Confirmed' && 'secondary')
                    || (booking?.status === 'Cancelled' && 'primary')}
                  >
                    {booking?.status}
                  </SeverityPill>
                </TableCell>
                <TableCell>
                  <Button color={"secondary"} onClick={()=>onCancelBooking(booking._id)}>
                    Cancel
                  </Button>
                </TableCell>
                <TableCell>
                  <Button color={"primary"} variant={"contained"} style={{marginRight:"-2rem"}} onClick={()=>window.location.href=`http://localhost:3000/listings/${booking.listingId}`}>
                    View Listing
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
              {
              props.bookings.length===0 &&
              <div style={{width:"100%", textAlign:"center", marginTop:"5%"}}>
              <Typography variant='subtitle1' color={"gray"} style={{fontSize:"1.5rem"}}>
                Currently, you don't have any upcoming trips
              </Typography>
              </div>
            }
      </List>

    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 3
      }}
    >
    </Box>
  </Card>
);}