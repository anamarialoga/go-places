import {Navigate} from 'react-router-dom';
import Home from '../pages/Home';

export const PrivateExploreRoute = () => {
    return ((localStorage.getItem('token') === "") || (localStorage.getItem('token') === null))? <Home/> : (<Navigate to='/explore'/>)
  }
  