import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  'http://127.0.0.1:8888/daniela-cuevas-t7YycgAoVSw-unsplash.jpg';


export default function ProductHero() {

  const navigate=useNavigate();

  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      <Typography color="inherit" align="center" variant="h2" marked="center">
      Collect moments 
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Enjoy offers up to -70% after 3 bookings
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        onClick={()=>navigate('/signup')}
        sx={{ minWidth: 200 }}
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}
