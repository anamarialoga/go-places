import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import withRoot from '../../withRoot';
import { Checkbox, FormControlLabel, Select, MenuItem, FormControl, Button, InputLabel } from '@mui/material';
import Typography from '../Typography';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '../TextField';


function Sidebar({sidebar, onSidebar}){
  const content = (
    <>
              <Box
                    sx={{
                      backgroundColor:"#fff5f8",
                        width:"100%",
                        paddingTop:"1rem",
                        paddingBottom: '3rem',
                    }}
                >
                    <CloseIcon style={{cursor:"pointer", marginLeft:"80%"}} onClick={onSidebar} />
            </Box>
            <Box sx={{ flexGrow: 1, backgroundColor:"#fff5f8" }}>
              <div style={{backgroundColor:"#fff5f8"}}>
              <ListItem>  
                <FormControl fullWidth style={{backgroundColor:"white"}} >
                <InputLabel style={{ fontWeight:"bold"}}>Purpose</InputLabel>
                <Select  name="purpose"  >
                    <MenuItem style={{color:"#ff3366"}} value="beach">Beach</MenuItem>
                    <MenuItem style={{color:"#ff3366"}} value="ski">Ski</MenuItem>
                    <MenuItem style={{color:"#ff3366"}} value="nature">Nature</MenuItem>
                    <MenuItem style={{color:"#ff3366"}} value="citybreak">City Break</MenuItem>
                    <MenuItem style={{color:"#ff3366"}} value="business">Business</MenuItem>
                </Select>
            </FormControl>
          </ListItem>
          <ListItem >  
          <FormControl fullWidth style={{backgroundColor:"white"}} >
                <InputLabel style={{ fontWeight:"bold"}}>Type</InputLabel>
                <Select  name="type"  >
                    <MenuItem style={{color:"#ff3366"}} value="hotel">Hotel</MenuItem>
                    <MenuItem style={{color:"#ff3366"}} value="apartment">Apartment</MenuItem>
                    <MenuItem style={{color:"#ff3366"}} value="villa">Villa</MenuItem>
                </Select>
            </FormControl>
          </ListItem>
          <ListItem>  
          <FormControl fullWidth style={{backgroundColor:"white"}} >
                <InputLabel  style={{ fontWeight:"bold"}}>Bedrooms</InputLabel>
                <Select  id="bedrooms" >
                  <MenuItem style={{color:"#ff3366"}} value="1">1</MenuItem>
                  <MenuItem style={{color:"#ff3366"}} value="2">2</MenuItem>
                  <MenuItem style={{color:"#ff3366"}} value="3">3</MenuItem>
                  <MenuItem style={{color:"#ff3366"}}value="4plus">4+</MenuItem>
                </Select>
            </FormControl>
          </ListItem>
          <ListItem>  
            <FormControl fullWidth >
            <TextField
                style={{backgroundColor: "#ff3366"}}
                autoFocus
                margin="dense"
                name="people"
                label="People"
                type="number"
                variant="outlined"
                value={1}
            />
            </FormControl>
          </ListItem>
          <ListItem style={{marginBottom: "1rem"}}>  
          <FormControl fullWidth  style={{ backgroundColor: "#ffffff"}}>
                <InputLabel style={{ fontWeight:"bold"}}>Bathrooms</InputLabel>
                <Select  id="bathrooms"  >
                  <MenuItem style={{color:"#ff3366"}} value="1">1</MenuItem>
                  <MenuItem style={{color:"#ff3366"}} value="2">2</MenuItem>
                  <MenuItem style={{color:"#ff3366"}} value="3+">3+</MenuItem>
                </Select>
            </FormControl>
          </ListItem>
          <Divider   sx={{
                    borderColor: "#ffffff",
                }}/>
        <List>
          <ListItem>
              <FormControlLabel style={{color:"#69696a"}} control={<Checkbox id={"parking"}/>} label="Parking" />
          </ListItem>
          <ListItem>
              <FormControlLabel style={{color:"#69696a"}} control={<Checkbox id={"spa"}/>} label="Spa" />
          </ListItem>
          <ListItem>
              <FormControlLabel style={{color:"#69696a"}}  control={<Checkbox id={"pool"}/>} label="Pool" />
          </ListItem>
          <ListItem>
              <FormControlLabel style={{color:"#69696a"}} control={<Checkbox id={"kitchen"}/>} label="Kitchen" />
          </ListItem>
      </List> 
          <ListItem>
              <FormControlLabel style={{color:"#69696a"}} control={<Checkbox id={"pool"}/>} checked={true} label="Exclude my listings from the search" />
          </ListItem>
          </div>
          </Box>
          <div style={{backgroundColor:"#fff5f8"}}>
            <Divider   sx={{
                    borderColor: "#ffffff",
                }}/>
            <Box
                sx={{
                    px: 2,
                    py: 3,
                    backgroundColor:"#fff5f8"
                }}
            >
                <Typography
                    color="primary.light"
                    variant="subtitle2"
                >
                    Need more discounts?
                </Typography>
                <Typography
                    color="secondary"
                    variant="body2"
                >
                    Check out our newsletter for daily offers and discounts.
                </Typography>

                <Button
                    color="secondary"
                    component="a"
                    fullWidth
                    sx={{ mt: 2 }}
                    variant="text"
                    style={{textDecoration: 'underline'}}
                 >
                    Subscribe here
                </Button>
            </Box>
            </div>
        </>
    )

    return (
    <Drawer
        anchor="left"
        open={sidebar}
        onClose={onSidebar}
        PaperProps={{
          sx: {
            backgroundColor: '#28282a',
            color: '#FFFFFF',
            width: 280,
            border: 'none'
          }
        }}
        variant="temporary"
      >
        {content}
    </Drawer>
);
}



export default withRoot(Sidebar);