import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  paper: {
    padding: '10px', backgroundColor: '#ffffffc2', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '110px',
  },
  markerContainer: {
    position:'absolute', transform: 'translate(-50%, -50%)', zIndex: 9, '&:hover': { zIndex: 2 },
  },
  mapContainer:{
    width: '100%', height: '100%'
  },
  pointer: {
    cursor: 'pointer'
  },
}));