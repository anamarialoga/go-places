import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: { 
    minWidth: 120, marginBottom: '1rem', fontFamily: 'Montserrat', marginLeft: '2rem'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '25px'
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '21vh', overflow: 'auto',
  },
}));