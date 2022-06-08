/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import { MessageLeft, MessageRight } from "../components/Messages/Message";
import { Paper } from "@mui/material";
import TextField from '@mui/material/TextField'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import withRoot from "../withRoot";
import { AppContext } from "../context/appContext";




function MyMessages(props) {
    const {user, message, onChangeMessage, sendMesssage2} = useContext(AppContext)

    const fromUserName = user.firstName + " " + user.lastName

    console.log(props.chat)
    console.log(props.landlordId)
    console.log(props.listingId)

  return (
    <div 
    style={{
        textAlign: 'center',  
        width: "80vw",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }}>
      <Paper 
      style={{ 
        paddingTop:"1rem",
        paddingLeft:"1rem",
        width: "60vw",
        height: "700px",
        maxWidth: "60vw",
        maxHeight: "700px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        position: "relative"
    }} >
        <Paper  style={{
             width: "calc( 100% - 40px )",
             margin: 10,
             overflowX:"hidden",
             overflowY: "scroll",
             height: "calc( 100% - 80px )"
        }}>
        { props.chat.map((message) => {
           if(message.from === user.id && message.from !== message.to )
                // && message.from!== message.to) 
           return   <MessageRight
                    key={message._id}
                    message={message.message}
                    timestamp={message.createdAt}
                    displayName={`${user.firstName} ${user.lastName}`}
                    avatarDisp={true}
                    />
            else if( message.to === user.id && message.from !== message.to) 
            return <MessageLeft
                        key={message._id}
                        message={message.message}
                        timestamp={message.createdAt}
                        displayName={props.landlordName}
                        avatarDisp={true}
                    />
        })}
        </Paper>
        <>
            <form 
            style={{display: "flex",
            justifyContent: "center",
            width: "95%", 
            marginBottom:"1.1rem", marginTop:"0.5rem"}} 
             noValidate 
             autoComplete="off">
            <TextField
                value={message}
                id="message"
                onChange={onChangeMessage}
                label="Write something ..."
                style={ { width: "100%" , borderRadius:"0rem"}}
            />
            <Button variant="contained" onClick={()=>sendMesssage2(
                //props.listing?.userId, 
                  props.landlordId,  message, props.listingId , fromUserName)} color="secondary" >
                <SendIcon color={"success"}/>
            </Button>
            </form>
        </>
      </Paper>
    </div>
  );
}

export default withRoot(MyMessages)