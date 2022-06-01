import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import withRoot from '../../withRoot';
import { Checkbox, FormControlLabel, FormLabel, Select, MenuItem, FormControl, Button } from '@mui/material';

const drawerWidth = 240;

function Sidebar({sidebar, onSidebar, window}) {
  const drawer = (
    <div>
      <Toolbar />
      <ListItem>  
              <FormControl >
                <FormLabel style={{color: "#ff3366", fontWeight: "600", width: "10rem"}}>Purpose</FormLabel>
                <Select  id="purpose"  >
                  <MenuItem value="beach">Beach</MenuItem>
                  <MenuItem value="ski">Ski</MenuItem>
                  <MenuItem value="nature">Nature</MenuItem>
                  <MenuItem value="citybreak">City Break</MenuItem>
                  <MenuItem value="business">Business</MenuItem>
                </Select> 
              </FormControl>
          </ListItem>
      <ListItem>  
              <FormControl >
                <FormLabel style={{color: "#ff3366", fontWeight: "600", width: "10rem"}}>Type</FormLabel>
                <Select  id="type"  >
                  <MenuItem  value="hotel">Hotel</MenuItem>
                  <MenuItem  value="apartment">Apartment</MenuItem>
                  <MenuItem  value="villa">Villa</MenuItem>
                </Select> 
              </FormControl>
          </ListItem>
      <Divider /> 
        <List>
          <ListItem>
              <FormControlLabel control={<Checkbox id={"parking"}/>} label="Parking" />
          </ListItem>
          <ListItem>
              <FormControlLabel control={<Checkbox id={"spa"}/>} label="Spa" />
          </ListItem>
          <ListItem>
              <FormControlLabel control={<Checkbox id={"pool"}/>} label="Pool" />
          </ListItem>
      </List> 
      <Divider />
      <List>
          <ListItem>  
              <FormControl >
                <FormLabel style={{color: "#ff3366", fontWeight: "600",  width: "5rem"}}>Bedrooms</FormLabel>
                <Select  id="bedrooms"  >
                  <MenuItem  value="1">1</MenuItem>
                  <MenuItem  value="2">2</MenuItem>
                  <MenuItem  value="3">3</MenuItem>
                  <MenuItem value="4plus">4+</MenuItem>
                </Select> 
              </FormControl>
          </ListItem>
          <ListItem>  
              <FormControl >
                <FormLabel style={{color: "#ff3366", fontWeight: "600",  width: "5rem"}}>Bathrooms</FormLabel>
                <Select  id="bathrooms"  >
                  <MenuItem  value="1">1</MenuItem>
                  <MenuItem  value="2">2</MenuItem>
                  <MenuItem  value="3plus">3+</MenuItem>
                </Select> 
              </FormControl>
          </ListItem>
      </List>
      <Divider/>
      <Button variant={"contained"} color={"secondary"} style={{marginTop:'2rem', marginLeft: "1rem"}}>Apply filters</Button>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={sidebar}
          onClose={onSidebar}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default withRoot(Sidebar);