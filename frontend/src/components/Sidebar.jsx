import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { Checkbox, FormControlLabel, Select, MenuItem, FormControl, InputLabel, Button } from '@material-ui/core';

import useStyles from './sidebarStyles';

export const Sidebar = ()=> {

  const classes = useStyles();
  
const [sidebar, setSidebar] = useState(false);
const showSidebar = () => {
  setSidebar(!sidebar);
  }


  return(
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
      <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <div className='advancedSearchDiv'>
                <Button variant="text" onClick={showSidebar} className={classes.advancedSearchBtn}>Advanced Search</Button>
            </div>
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'  onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
              </Link>
            </li>
            <FormControlLabel
                className={classes.label}
                label="Parking"
                control={
                  <Checkbox style={{color:'whitesmoke'}}
                  />
                }
              />
              <FormControlLabel
                className={classes.label}
                label="Pool"
                control={
                  <Checkbox style={{color:'whitesmoke'}}
                  />
                }
              />
              <FormControlLabel
                className={classes.label}
                label="Spa"
                control={
                  <Checkbox style={{color:'whitesmoke'}}
                  />
                }
              />
          <br/>
          <FormControl className={classes.formControl}>
            <InputLabel id="bedrooms" style={{color: 'whitesmoke'}}>Bedrooms</InputLabel>
            <Select  id="bedrooms"  >
              <MenuItem className={classes.selectClass} value="1">1</MenuItem>
              <MenuItem className={classes.selectClass} value="2">2</MenuItem>
              <MenuItem className={classes.selectClass} value="3">3</MenuItem>
              <MenuItem value="4plus">4+</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="bathrooms" style={{color: 'whitesmoke'}}>Bathrooms</InputLabel>
            <Select  id="bathrooms"  >
              <MenuItem className={classes.selectClass} value="1">1</MenuItem>
              <MenuItem className={classes.selectClass} value="2">2</MenuItem>
              <MenuItem  value="3plus">3+</MenuItem>
            </Select>
          </FormControl>
          <br/>
          <FormControl className={classes.formControl}>
            <InputLabel id="type" style={{color: 'whitesmoke'}}>Type</InputLabel>
            <Select  id="type"  >
              <MenuItem className={classes.selectClass} value="hotel">Hotel</MenuItem>
              <MenuItem className={classes.selectClass} value="apartment">Apartment</MenuItem>
              <MenuItem  value="villa">Villa</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="purpose" style={{color: 'whitesmoke'}}>Purpose</InputLabel>
            <Select  id="purpose"  >
              <MenuItem className={classes.selectClass} value="beach">Beach</MenuItem>
              <MenuItem className={classes.selectClass} value="ski">Ski</MenuItem>
              <MenuItem className={classes.selectClass} value="nature">Nature</MenuItem>
              <MenuItem className={classes.selectClass}value="citybreak">City Break</MenuItem>
              <MenuItem value="business">Business</MenuItem>
            </Select>
          </FormControl>
          </ul>
        </nav>
        </IconContext.Provider>
  </>
)
}

export default Sidebar;