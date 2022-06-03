import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { Divider, List, ListItem, ListItemAvatar, ListItemText} from '@mui/material';
import withRoot from '../../withRoot';

function Weather(props) {

    console.log(props.forecast)
    const today = new Date();

  return (
    <Grid item xs={12} md={3} >
      <CardActionArea component="a" href="#">
        <Card sx={{ marginTop: '1rem',display: 'flex' , width:"10cm"}}>
        <div className='block' style={{width: "100%"}}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5" style={{fontWeight: "800"}}>
                Weather Forecast in {props.listing?.location.split(",").splice(-2)[0]}
            </Typography>
            <Typography  variant="subtitile1" color={'text.secondary'} style={{fontWeight: "800"}}>
                This forecast is proximate. We cannot promise that changes will not occur. 
            </Typography>
          </CardContent>
          <Divider />
          <CardContent style={{width:"100%"}}>
              <List sx={{ width: '100%', overflow: 'auto', maxHeight: "9.2cm" , marginTop: "-1rem"}}>
                  {props.forecast?.map((day, i)=>
                  <ListItem alignItems="flex-start" key={i} divider= {i < props.forecast.length-1}>
                        <ListItemAvatar style={{marginTop: "-0.5rem"}}>
                        <img
                            style={{marginLeft: "-2rem"}}
                             alt={i}
                             src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                            />
                        <Typography variant="h6" color={"secondary"} style={{marginTop: "-1rem", marginLeft: "0.5rem"}}>
                            {new Date(today.getFullYear(), today.getMonth(), today.getDate()+i).toString().split(" ").splice(0,1)}
                        </Typography>
                        <Typography variant="subtitle2" style={{marginLeft: '-0.5rem'}}>
                            {new Date(today.getFullYear(), today.getMonth(), today.getDate()+i).toString().split(" ").splice(1,3).join(" ")}
                        </Typography>
                        </ListItemAvatar>
                        <ListItemText style={{alignContent: "center", justifyContent:"center", alignItems: "center", textAlign: "center"}} >
                        <Typography variant={"subtitle2"} color={"text.secondary"} style={{ marginLeft: "1rem", marginBottom: "0.5rem", marginTop:"-0.3rem" }}>
                             Temperature Day (maximum) 
                        </Typography>
                        <Typography  style={{ marginLeft: "1rem", fontWeight: "800", fontSize: "1.2rem" , marginBottom: "0.5rem"}}>
                             {(day.temp.max -272.15).toFixed(2)}  °C
                        </Typography>
                        <Typography variant={"subtitle2"} color={"text.secondary"} style={{ marginLeft: "1rem" , marginBottom: "0.5rem"}}>
                             Temperature Night (minimum) 
                        </Typography>
                        <Typography   style={{ marginLeft: "1rem", fontWeight: "800",fontSize: "1.2rem" }}>
                             {(day.temp.min -272.15).toFixed(2)}  °C
                        </Typography>
                        <Typography color={"secondary"} variant={"subtitle1"} style={{ marginLeft: "1rem", fontSize: "0.9rem", marginTop: "0.5rem"}}>
                            Mostly {day.weather[0].description}
                        </Typography>
                        </ListItemText>
                  </ListItem>)}
              </List>
          </CardContent>
          {/*<CardActions >      
            <div style={{display: 'inline-flex', width:"100%", justifyContent: "space-between"}}>
            <Rating size='large' readOnly defaultValue={props.listing?.rating ?? 5} precision={0.5}/>
            <Typography component="h2" variant="h5" style={{marginRight:"1rem", fontWeight: "800"}}>
              {props.listing?.rating ?? 5} /5 
              </Typography>
            </div>
          </CardActions> */}
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
}



export default withRoot(Weather);