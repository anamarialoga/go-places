import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/Header-Bar/AppBar';
import Toolbar from '../components/Header-Bar/Toolbar';
import {RiMapPinFill} from 'react-icons/ri'
import { Button } from '@mui/material';
import {  useNavigate } from 'react-router-dom';
import { AppContext } from '../context/appContext';
import {ReactComponent as PersonIcon} from '../common/svg/personIcon.svg';
import withRoot from '../withRoot';
import ExploreIcon from '@mui/icons-material/Explore';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  const {onLogOut} = React.useContext(AppContext)
  const navigate = useNavigate()
  const {user} = React.useContext(AppContext)

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href={((localStorage.getItem('token') === null) || (localStorage.getItem('token') === "")) ? '/' : '/explore'}
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
          {(window.location.pathname !== "/profile")&&(window.location.pathname !== "/addlisting") &&(window.location.pathname !== "/mylistings") && (window.location.pathname !== "/statistics") && (window.location.pathname !== "/customers") && (window.location.pathname !== "/trips")&& (
            <Button
              color={"primary"}
              variant="text"
              underline="none"
              sx={rightLink}
              onClick={()=> navigate('/profile')}
            >
              <PersonIcon style={{marginRight: '0.5rem', fill: "#ff3366"}}/> {`${user.firstName} 's Profile`}
            </Button> )}
            {(window.location.pathname !== "/explore")&&(window.location.pathname !== "/") && (
            <Button
              color={"primary"}
              variant="text"
              underline="none"
              sx={rightLink}
              onClick={()=> navigate('/explore')}
            >
              <ExploreIcon  style={{marginRight: '0.5rem' }}/> {'Explore'}
            </Button> )}
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

export default withRoot(AppAppBar);
