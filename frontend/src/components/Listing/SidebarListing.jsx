import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import withRoot from '../../withRoot';
import {Button} from '@mui/material';
import Typography from '../Typography';
import { NavItem } from '../NavItem';
import CollectionsIcon from '@mui/icons-material/Collections';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AttractionsIcon from '@mui/icons-material/Attractions';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function SidebarListing(props) {

    const items = [
        {
            href: `/listings/${props.listingid}`,
            icon: (<LocationOnOutlinedIcon fontSize="small" />),
            title: 'Location & Details'
        },
        {
            href: `/listings/${props.listingid}/images`,
            icon: (<CollectionsIcon fontSize="small"/>),
            title: 'Gallery'
        },
        {
            href: `/listings/${props.listingid}/food`,
            icon: (<LocalDiningIcon fontSize="small" />),
            title: 'Food & Dining'
        },
        {
            href:  `/listings/${props.listingid}/attractions`,
            icon: (<AttractionsIcon fontSize="small" />),
            title: 'Attractions'
        },
        {
            href:  `/listings/${props.listingid}/landlord`,
            icon: (<PersonIcon fontSize="small"/>),
            title: 'Landlord'
        },
        {
          href:  `/listings/${props.listingid}/reviews`,
          icon: (<ReviewsIcon fontSize="small" />),
          title: 'Reviews'
        },    
        {
            href:  `/listings/${props.listingid}/rent`,
            icon: (<ShoppingCartIcon fontSize="small" />),
            title: 'Checkout'
        },   
      ];

    const content = (
    <>
            <Box sx={{ px: 2 }}>
                <Box
                    sx={{
                        alignItems: 'center',
                        backgroundColor: '#28282a',
                        cursor: 'pointer',
                        display: 'flex',
                        px: 1,
                        py: '0px',
                        borderRadius: 1
                    }}
                >
                    <div style={{marginTop: '1rem'}} >
                        <Typography
                            color="white"
                            variant="h6"
                        >
                           {props?.listing?.name}
                        </Typography>
                        <Typography
                            color="white"
                            variant="subtitle2"
                        >
                           {props?.listing?.location}
                        </Typography>
                    </div>
                </Box>
            </Box>
            <Divider
                sx={{
                    borderColor: "#2D3748",
                    my: 3
                }} />
            <Box sx={{ flexGrow: 1 }}>
            {items.map((item) => (
                    <NavItem
                        key={item.title}
                        icon={item.icon}
                        href={item.href}
                        title={item.title}
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
            border: 'none'
          }
        }}
        variant="persistent"
      >
        {content}
    </Drawer>
);}

export default withRoot(SidebarListing);