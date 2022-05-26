import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import {RiMapPinFill} from 'react-icons/ri'
import { Button } from '@mui/material';
import {  useNavigate } from 'react-router-dom';
import { AppContext } from '../context/appContext';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {

  const {onLogOut} = React.useContext(AppContext)
  const navigate = useNavigate()

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href='/'
            sx={{ fontSize: 24 }}
          >
            G<RiMapPinFill size={'1.3rem'} color='ff3366'/>Places
          </Link>
          {localStorage.getItem('token') === "" || localStorage.getItem('token') === null || localStorage.getItem('token') === undefined ? 
          (<Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="text"
              underline="none"
              sx={rightLink}
              onClick={()=>navigate('/signin')}
            >
              {'Sign In'}
              </Button>
            <Button
              style={{color:"#ff3366"}}
              variant="text"
              underline="none"
              sx={rightLink}
              onClick={()=>navigate('/signup')}
            >
              {'Sign Up'}
            </Button>
          </Box>  ) : (
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              color={"secondary"}
              variant="contained"
              underline="none"
              sx={rightLink}
              onClick={onLogOut}
            >
              {'Log Out'}
              </Button>
            </Box>)}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
