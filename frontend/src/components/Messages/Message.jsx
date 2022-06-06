import React from "react";
import Avatar from "@mui/material/Avatar";



export const MessageLeft = (props) => {
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  const photoURL = props.photoURL ? props.photoURL : "dummy.js";
  const displayName = props.displayName ? props.displayName : "名無しさん";


  return (
    <>
      <div style={{
          marginLeft:"1rem",
            marginTop:"1rem",
           marginBottom:"1rem",
           display: "flex"
      }}>
        <Avatar
          alt={displayName}
          src={photoURL}
        ></Avatar>
        <div>
          <div style={{ marginLeft: "20px"}}>{displayName}</div>
          <div style={{
               position: "relative",
               marginLeft: "20px",
               marginBottom: "10px",
               padding: "10px",
               backgroundColor: "#A8DDFD",
               width: "60%",
               textAlign: "left",
               font: "400 .9em 'Open Sans', sans-serif",
               border: "1px solid #97C6E3",
               borderRadius: "10px",
               "&:after": {
                 content: "''",
                 position: "absolute",
                 width: "0",
                 height: "0",
                 borderTop: "15px solid #A8DDFD",
                 borderLeft: "15px solid transparent",
                 borderRight: "15px solid transparent",
                 top: "0",
                 left: "-15px"
               },
               "&:before": {
                 content: "''",
                 position: "absolute",
                 width: "0",
                 height: "0",
                 borderTop: "17px solid #97C6E3",
                 borderLeft: "16px solid transparent",
                 borderRight: "16px solid transparent",
                 top: "-1px",
                 left: "-17px"
               }
          }}>
            <div>
              <p style={{ 
                padding: 0,
                margin: 3
              }}>{message}</p>
            </div>
            <div style={{
                 position: "absolute",
                 fontSize: ".85em",
                 fontWeight: "300",
                 marginTop: "10px",
                 bottom: "-15px",
                 right: "5px"
            }}>{timestamp}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export const MessageRight = (props) => {
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
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
      }}>{message}</p>
        <div style={{
              position: "absolute",
              fontSize: ".85em",
              fontWeight: "300",
              marginTop: "10px",
              bottom: "-15px",
              right: "5px"
        }}>{timestamp}</div>
      </div>
    </div>
  );
};
