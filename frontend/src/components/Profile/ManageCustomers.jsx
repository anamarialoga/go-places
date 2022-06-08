import PerfectScrollbar from 'react-perfect-scrollbar';
import { Divider, List} from '@mui/material';
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
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Typography from '../Typography';



export const ManageCustomers = (props) => (
  <Card {...props}>
    <Box sx={{p:3, display:"inline-flex"}}>
    <ManageAccountsIcon style={{paddingTop:"0.2rem"}}/>
      <Typography variant='h5' color="#ff3366" style={{marginLeft:"0.5rem",fontWeight:800}}>
        Customers Details
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
              <TableCell style={{fontWeight:800, color:"#ff3366", fontSize:"1rem"}}>
                Customer
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
                    Date End
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell style={{fontWeight:800, color:"#ff3366", fontSize:"1rem"}}>
                Status
              </TableCell>
              <TableCell style={{fontWeight:800, color:"#ff3366", fontSize:"1rem"}}>
                Phone
              </TableCell>
              <TableCell style={{fontWeight:800, color:"#ff3366", fontSize:"1rem"}}>
                E-mail
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {props.manageRentals?.map((rental) => (
              <TableRow
                hover
                key={rental._id}
              >
                <TableCell style={{fontWeight:800}}>
                  ID{(rental._id).slice(0,7)}
                </TableCell>
                <TableCell>
                  {rental.billingData.firstName} {rental.billingData.lastName}
                </TableCell>
                <TableCell>
                  {rental.dateRange[0]}
                </TableCell>
                <TableCell>
                    {rental.dateRange[rental.dateRange.length-1]}
                </TableCell>
                <TableCell>
                  <SeverityPill
                    color={(rental.status === 'Confirmed' && 'secondary')
                    || (rental.status === 'Cancelled' && 'orimary')}
                  >
                    {rental?.status}
                  </SeverityPill>
                </TableCell>
                <TableCell>
                  <Typography>
                      {rental.billingData.phone}
                  </Typography>
                </TableCell>
                <TableCell>
                    <Typography>
                        {rental.billingData.email}
                    </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
         {
              props.manageRentals.length===0 &&
              <div style={{width:"100%", textAlign:"center", marginTop:"5%"}}>
              <Typography variant='subtitle1' color={"gray"} style={{fontSize:"1.5rem"}}>
                Your properties were not booked yet
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
);