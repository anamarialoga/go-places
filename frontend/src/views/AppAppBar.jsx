import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from "@mui/material/IconButton"
import AppBar from '../components/Header-Bar/AppBar';
import Toolbar from '../components/Header-Bar/Toolbar';
import {RiMapPinFill} from 'react-icons/ri'
import { Button } from '@mui/material';
import {  useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { AppContext } from '../context/appContext';
import {ReactComponent as PersonIcon} from '../common/svg/personIcon.svg';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  const {onLogOut} = React.useContext(AppContext)
  const navigate = useNavigate()
  // const [sidebarOpen, setSidebarOpen] = React.useState(true);

  // const onSidebarOpen=()=>{
  //   setSidebarOpen(!sidebarOpen);
  // }

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* {window.location.pathname === "/profile" && (
              <IconButton
              onClick={onSidebarOpen}
              sx={{
                display: {
                  xs: 'inline-flex',
                },
              }}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
            )} */}
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
          {window.location.pathname !== "/profile" && (<Button
              color={"primary"}
              variant="contained"
              underline="none"
              sx={rightLink}
              onClick={()=> navigate('/profile')}
            >
              <PersonIcon style={{marginRight: '0.5rem', fill: "white"}}/> {'Profile'}
            </Button>)}
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
