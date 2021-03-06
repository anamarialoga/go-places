import PropTypes from 'prop-types';
import { Box, Button, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

export const NavItem = (props) => {
  const { href, icon, title, ...others } = props;

  const active = href ? (window.location.pathname === href) : false;

  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        mb: 0.5,
        py: 0,
        px: 2
      }}
      {...others}
    >
      <Link
        to={href}
        style={{width: "100%", textDecoration: "none"}}
      >
        <Button
          startIcon={icon}
          sx={{
            fontSize: "1rem",
            backgroundColor: active? "secondary.main": 'primary.main',
            borderRadius: 1,
            color: active? "secondary.light" : 'white' ,
            fontWeight: 'fontWeightBold',
            justifyContent: 'flex-start',
            px: 3,
            textAlign: 'left',
            textTransform: 'none',
            width: '100%',
            '& .MuiButton-startIcon': {
              color:  "secondary.light" 
            },
            '&:hover': {
              backgroundColor: 'rgba(255,255,255, 0.08)',
              color: "white"
            },
            '& .MuiButton-startIcon &:hover':{
              color: "secondary.main" 
            }
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            {title}
          </Box>
        </Button>
      </Link>
    </ListItem>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string
};
