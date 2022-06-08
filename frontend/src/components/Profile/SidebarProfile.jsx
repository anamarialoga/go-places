import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import withRoot from '../../withRoot';
import {Button} from '@mui/material';
import Typography from '../Typography';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import { NavItem } from '../NavItem';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';


const items = [
    {
        href: '/profile',
        icon: (<ManageAccountsOutlinedIcon fontSize="small" />),
        title: 'My Account'
    },
    {
        href: '/mylistings',
        icon: (<HomeIcon fontSize="small"/>),
        title: 'My Listings'
    },
    {
        href: '/addlisting',
        icon: (<AddBoxIcon fontSize="small"/>),
        title: 'Add Listing'
    },
    {
      href: '/dashboard',
      icon: (<BarChartOutlinedIcon fontSize="small" />),
      title: 'Dashboard'
    },

  ];


function SidebarProfile(props) {

    const content = (
    <>
            <Box sx={{ px: 2 }}>
                <Box
                    sx={{
                        alignItems: 'center',
                        backgroundColor: '#28282a',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        px: 1,
                        py: '0px',
                        borderRadius: 1
                    }}
                >
                    <div style={{marginTop: '1rem'}}>
                        <Typography
                            color="white"
                            variant="subtitle1"
                            style={{fontSize:"1.7rem", fontWeight:"800"}}
                        >
                           My Account
                        </Typography>
                        <Typography
                            color="white"
                            variant="subtitle2"
                        >
                           {props.user.firstName} {props.user.lastName}, {props.user.city}, {props.user.country}
                        </Typography>
                    </div>
                </Box>
            </Box>
            <Divider
                sx={{
                    borderColor: '#2D3748',
                    my: 3
                }} />
            <Box sx={{ flexGrow: 1 }}>
                {items.map((item) => (
                    <NavItem
                        key={item.title}
                        icon={item.icon}
                        href={item.href}
                        title={item.title}
                        onClick={()=>console.log("jsjsjss")}
                    />
                ))}
            </Box>
            <Divider sx={{ borderColor: '#2D3748' }} /><Box
                sx={{
                    px: 2,
                    py: 3
                }}
            >
                <Typography
                    color="neutral.100"
                    variant="subtitle2"
                >
                    Need more discounts?
                </Typography>
                <Typography
                    color="neutral.500"
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
        </>
    )

    return (
    <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: '#28282a',
            color: '#FFFFFF',
            width: 280,
            borderRight: '0px',
          }
        }}
        variant="persistent"
      >
        {content}
    </Drawer>
);}

export default withRoot(SidebarProfile);