import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "../Typography";



export const MessageLeft = (props) => {
  return (
    <>
      <div style={{
            marginLeft:"1rem",
            marginTop:"1rem",
            marginBottom:"3rem",
            display: "flex",
            width:"100%"
      }}>
        <Avatar
        ></Avatar>
        <div style={{width:"100%"}}>
          <div style={{textAlign: "left", marginLeft:"1.5rem"}}>
              <Typography variant="subtitle2" style={{fontWeight:"500"}}>
              {props.displayName}
              </Typography>
          </div>
          <div className="block" style={{marginBottom:"3rem"}}>
          <div style={{
               position: "relative",
               marginLeft: "20px",
               marginBottom: "10px",
               padding: "10px",
               backgroundColor: "rgb(151 198 227)",
               width: "fit-content",
               textAlign: "left",
               borderRadius: "2rem",
          }}>
            <div>
            <Typography variant="subtitle2" color={"#ffffff"} style={{ 
              paddingLeft: 0,
              margin: 3,
              fontSize:"1rem"
            }}>
                {props.message}
            </Typography>
            </div>
            <div style={{
                width:"5cm",
                position:"absolute",
                fontSize: ".85em",
                fontWeight: "300",
                marginTop: "10px",
                bottom: "-40%",
                left: "5px"
              }}>
              {props.timestamp.slice(0,10)} {props.timestamp.slice(-13,-5)}
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const MessageRight = (props) => {
  return (
    <div style={{
      marginLeft:"1rem",
      marginTop:"1rem",
      marginBottom:"3rem",
      display: "flex",
      width:"100%"
}}>
  <div style={{width:"100%",position:'relative'}}>
    <div style={{textAlign: "right", marginRight:"3.7rem"}}>
        <Typography variant="subtitle2" style={{fontWeight:"500"}}>
       (me) {props.displayName}
        </Typography>
    </div>
    <div className="block" style={{marginBottom:"3rem"}}>
    <div style={{
        position: "absolute",
         padding: "10px",
         backgroundColor: "#f7bfc899",
         width: "fit-content",
         right:"3.5rem",
         textAlign: "right",
         borderRadius: "2rem",
    }}>
      <div>
        <Typography variant="subtitle2" color={"#ffffff"} style={{ 
          padding: 0,
          margin: 3,
          fontSize:"1rem"
        }}>{props.message}</Typography>
      </div>
      <div style={{
            width:"5cm",
            position:"absolute",
           fontSize: ".85em",
           fontWeight: "300",
           marginTop: "10px",
           bottom: "-40%",
           right: "5px"
      }}>
      {props.timestamp.slice(0,10)} {props.timestamp.slice(-13,-5)}
    </div>
    </div>
    </div>
  </div>
</div>
  );
};
