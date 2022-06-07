import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "../Typography";



export const MessageLeft = (props) => {
  return (
    <>
      <div style={{
            marginLeft:"1rem",
            marginTop:"1rem",
            marginBottom:"1rem",
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
          <div style={{
               position: "relative",
               marginLeft: "20px",
               marginBottom: "10px",
               padding: "10px",
               backgroundColor: "pink",
               width: "60%",
               textAlign: "left",
               font: "400 .9em 'Open Sans', sans-serif",
               border: "1px solid #97C6E3",
               borderRadius: "0.5rem",
          }}>
            <div>
              <p style={{ 
                padding: 0,
                margin: 3
              }}>{props.message}</p>
            </div>
            <div style={{
                 position: "absolute",
                 fontSize: ".85em",
                 fontWeight: "300",
                 marginTop: "10px",
                 bottom: "-15px",
                 right: "5px"
            }}>{props.timestamp}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export const MessageRight = (props) => {
  return (
    <div style={{
    marginRight:"1rem",
    marginTop:"1rem",
    marginBottom:"1rem",     
    display: "flex",
    justifyContent: "flex-end"
    }}>
      <div style={{
      position: "relative",
      marginRight: "20px",
      marginBottom: "10px",
      padding: "10px",
      backgroundColor: "#f8e896",
      width: "60%",
      textAlign: "left",
      font: "400 .9em 'Open Sans', sans-serif",
      border: "1px solid #dfd087",
      borderRadius: "10px",
      "&:after": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "15px solid #f8e896",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        top: "0",
        right: "-15px"
      },
      "&:before": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "17px solid #dfd087",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        top: "-1px",
        right: "-17px"
      }}}>
        <p style={{
      padding: 0,
      margin: 3
      }}>{props.message}</p>
        <div style={{
              position: "absolute",
              fontSize: ".85em",
              fontWeight: "300",
              marginTop: "10px",
              bottom: "-15px",
              right: "5px"
        }}>{props.timestamp}</div>
      </div>
    </div>
  );
};
