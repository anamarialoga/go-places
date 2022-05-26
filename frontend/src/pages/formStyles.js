import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    inactive:{
        fontFamily: "Montserrat", color: "whitesmoke",  backgroundColor: "#1f1e1e" , borderRadius:'0.75rem'
      },
    active: {
        fontFamily: "Montserrat", color: "whitesmoke",  backgroundColor: "#00cc66",  borderRadius:'0.75rem'
    }
}));