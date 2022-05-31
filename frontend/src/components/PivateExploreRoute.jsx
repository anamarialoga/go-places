import {Navigate} from 'react-router-dom';
import Home from '../pages/Home';

export const PrivateExploreRoute = () => {
    return (localStorage.getItem('token') === "")? <Home/> : (<Navigate to='/explore'/>)
  }
  